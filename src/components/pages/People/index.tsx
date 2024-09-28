import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import Layout from '@/components/atoms/Layout';
import Button from '@/components/molecules/Button';
import UserCard from '@/components/organisms/people/UserCard';
import type { PeopleGeneration, PeopleItem } from '@/db/model';
import { getEntries } from '@/libs/utils';

import styles from './index.module.scss';

type Props = {
  currentPeople: PeopleItem[];
  peopleGenerations: PeopleGeneration[];
  selectedPeopleGeneration: PeopleGeneration;
};

function People({
  currentPeople,
  peopleGenerations,
  selectedPeopleGeneration,
}: Props) {
  return (
    <Layout>
      <ContentWithTitle title="사이퍼 소개">
        <div className={styles.periodsWrapper}>
          {peopleGenerations.map((generation) => (
            <Button
              key={generation}
              className={styles.button}
              buttonType="chip"
              active={generation === selectedPeopleGeneration}
              href={`/people?generation=${generation}`}
            >
              {generation === 'contribute' ? '기여자' : `${generation}기`}
            </Button>
          ))}
        </div>
        <section className={styles.wrapper}>
          <div className={styles.contents}>
            {currentPeople.map((person) => {
              const { github, linkedin, etc } = person;

              const links = getEntries({
                GITHUB: github,
                LINKEDIN: linkedin,
                LINK: etc,
              });

              return (
                <UserCard
                  key={person.id}
                  period={person.period}
                  img={person.thumbnail}
                  name={person.name}
                  part={person.part}
                  links={links}
                  introduce={person.introduce}
                  review={person.review}
                  isOrganizer={person.isOrganizer}
                />
              );
            })}
          </div>
        </section>
      </ContentWithTitle>
    </Layout>
  );
}

export default People;
