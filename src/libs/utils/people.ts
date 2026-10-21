import type { PeopleGeneration, PeopleItem } from '@/db/model';

const text = (value: unknown) => (typeof value === 'string' ? value : '');

export function preparePeople(data: unknown, requestedGeneration?: unknown) {
  const groups = new Map<PeopleGeneration, PeopleItem[]>();
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    for (const [key, value] of Object.entries(data)) {
      if (!/^[1-9]\d*$/.test(key) || !Array.isArray(value)) continue;
      const generation = key as PeopleGeneration;
      const members: PeopleItem[] = value.flatMap((item, index) => {
        if (!item || typeof item !== 'object' || !text(item.name).trim()) {
          return [];
        }
        return [
          {
            id: text(item.id) || `${generation}-${index}`,
            period: generation,
            name: text(item.name),
            part: text(item.part),
            isOrganizer: item.isOrganizer === true,
            thumbnail: text(item.thumbnail),
            introduce: text(item.introduce),
            review: text(item.review),
            github: text(item.github),
            linkedin: text(item.linkedin),
            etc: text(item.etc),
          },
        ];
      });
      if (members.length) groups.set(generation, members);
    }
  }
  const peopleGenerations = [...groups.keys()].sort(
    (a, b) => Number(b) - Number(a),
  );
  const selectedPeopleGeneration =
    typeof requestedGeneration === 'string' &&
    groups.has(requestedGeneration as PeopleGeneration)
      ? (requestedGeneration as PeopleGeneration)
      : peopleGenerations[0];
  const currentPeople = [...(groups.get(selectedPeopleGeneration) ?? [])].sort(
    (a, b) =>
      Number(b.isOrganizer) - Number(a.isOrganizer) ||
      a.name.localeCompare(b.name, 'ko'),
  );
  return { currentPeople, peopleGenerations, selectedPeopleGeneration };
}
