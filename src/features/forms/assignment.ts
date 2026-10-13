import { AssignmentRules, Participant } from './model';

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
export function assignTeams(
  people: Participant[],
  rules: AssignmentRules,
  random = Math.random,
): { teams: Participant[][]; score: number } {
  if (!people.length) throw new Error('배정할 응답자가 없습니다.');
  if (people.length > 200)
    throw new Error('한 번에 최대 200명까지 배정할 수 있습니다.');
  if (
    !Number.isInteger(rules.teamSize) ||
    rules.teamSize < 1 ||
    rules.teamSize > 30
  )
    throw new Error('조별 최대 인원은 1~30명으로 설정해주세요.');
  const ids = new Set(people.map((p) => p.id));
  if (ids.size !== people.length) throw new Error('중복된 참가자가 있습니다.');
  const parent = new Map(people.map((p) => [p.id, p.id]));
  const root = (id: string): string =>
    parent.get(id) === id ? id : root(parent.get(id)!);
  for (const pair of [...rules.together, ...rules.apart])
    if (pair.length !== 2 || pair.some((id) => !ids.has(id)))
      throw new Error('조건의 참가자가 응답 목록에 없습니다.');
  for (const [a, b] of rules.together) parent.set(root(a), root(b));
  for (const [a, b] of rules.apart)
    if (root(a) === root(b))
      throw new Error('같은 조와 다른 조 조건이 충돌합니다.');
  const groups = new Map<string, Participant[]>();
  for (const p of people)
    groups.set(root(p.id), [...(groups.get(root(p.id)) || []), p]);
  if ([...groups.values()].some((g) => g.length > rules.teamSize))
    throw new Error('함께 배정할 인원이 조별 최대 인원보다 많습니다.');
  const count = Math.ceil(people.length / rules.teamSize);
  let best: Participant[][] | undefined;
  let bestScore = Infinity;
  const score = (teams: Participant[][]) => {
    let result = teams.reduce(
      (s, t) => s + (t.length - people.length / count) ** 2 * 10,
      0,
    );
    for (const key of rules.balanceBy) {
      const values = new Set(people.map((p) => p.attributes[key] || '미응답'));
      for (const value of values) {
        const avg =
          people.filter((p) => (p.attributes[key] || '미응답') === value)
            .length / count;
        result += teams.reduce(
          (s, t) =>
            s +
            (t.filter((p) => (p.attributes[key] || '미응답') === value).length -
              avg) **
              2,
          0,
        );
      }
    }
    return result;
  };
  for (let attempt = 0; attempt < 100; attempt++) {
    const blocks = shuffle([...groups.values()], random).sort(
      (a, b) => b.length - a.length,
    );
    const teams: Participant[][] = Array.from({ length: count }, () => []);
    let steps = 0;
    const place = (at: number): boolean => {
      if (++steps > 3000) return false;
      if (at === blocks.length) return teams.every((t) => t.length > 0);
      const block = blocks[at];
      const indices = shuffle(
        teams.map((_, i) => i),
        random,
      ).sort((a, b) => teams[a].length - teams[b].length);
      for (const i of indices) {
        const t = teams[i];
        if (t.length + block.length > rules.teamSize) continue;
        if (
          rules.apart.some(
            ([a, b]) =>
              (block.some((p) => p.id === a) && t.some((p) => p.id === b)) ||
              (block.some((p) => p.id === b) && t.some((p) => p.id === a)),
          )
        )
          continue;
        t.push(...block);
        if (place(at + 1)) return true;
        t.splice(t.length - block.length);
      }
      return false;
    };
    if (place(0)) {
      const s = score(teams);
      if (s < bestScore) {
        best = teams.map((t) => [...t]);
        bestScore = s;
      }
    }
    if (bestScore === 0) break;
  }
  if (!best)
    throw new Error(
      '현재 조건에서 배정 결과를 찾지 못했습니다. 같은 조/다른 조 조건이나 조별 인원을 조정해주세요.',
    );
  return { teams: shuffle(best, random), score: bestScore };
}
