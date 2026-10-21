import { preparePeople } from './people';

describe('preparePeople', () => {
  it.each([null, undefined, {}, { '1': [], '2': null }, []])(
    'handles missing data: %j',
    (data) => {
      expect(preparePeople(data)).toEqual({
        currentPeople: [],
        peopleGenerations: [],
        selectedPeopleGeneration: undefined,
      });
    },
  );

  it('falls back to the newest populated generation for invalid queries', () => {
    const data = { '4': [{ name: '이전' }], '5': [{ name: '최신' }], '6': [] };
    for (const query of ['99', '6', '__proto__', ['5'], undefined]) {
      expect(preparePeople(data, query).selectedPeopleGeneration).toBe('5');
    }
    expect(preparePeople(data, '4').currentPeople[0].name).toBe('이전');
  });

  it('skips invalid records, normalizes missing fields and sorts organizers first', () => {
    const result = preparePeople({
      '5': [
        null,
        {},
        { name: 1 },
        { name: '가' },
        { name: '나', isOrganizer: true, review: { bad: true } },
      ],
    });
    expect(result.currentPeople.map((p) => p.name)).toEqual(['나', '가']);
    expect(result.currentPeople[0]).toMatchObject({
      part: '',
      review: '',
      thumbnail: '',
      isOrganizer: true,
    });
  });
});
