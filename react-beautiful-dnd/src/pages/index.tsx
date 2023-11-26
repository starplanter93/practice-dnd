import { useEffect, useState } from 'react';

interface MockType {
  id: number;
  title: string;
}

const Mock = [
  {
    id: 1,
    title: 'title1',
  },
  {
    id: 2,
    title: 'title2',
  },
  {
    id: 3,
    title: 'title3',
  },
  {
    id: 4,
    title: 'title4',
  },
  {
    id: 5,
    title: 'title5',
  },
];

function returnTeamCard() {
  return Mock.map((el) => <TeamCard key={el.id} id={el.id} title={el.title} />);
}

function TeamCard({ id, title }: { id: number; title: string }) {
  return (
    <div className='flex p-3 border-solid border-2 border-sky-200'>
      <div>{id}</div>
      <div>{title}</div>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState<MockType[]>();
  useEffect(() => {
    setData(Mock);
  }, []);

  return (
    <div>
      <h4 className='mx-auto my-0'>React beautiful dnd practice</h4>
      <div className={'flex justify-between'}>
        <section
          className={'min-h-100px border-solid border-4 border-sky-500 p-5'}
        >
          <h4>unassinged team</h4>
          {returnTeamCard()}
        </section>
        <section
          className={'min-h-100px border-solid border-4 border-sky-500 p-5'}
        >
          <h4>team1</h4>
        </section>
        <section
          className={'min-h-100px border-solid border-4 border-sky-500 p-5'}
        >
          <h4>team2</h4>
        </section>
        <section
          className={'min-h-100px border-solid border-4 border-sky-500 p-5'}
        >
          <h4>team3</h4>
        </section>
      </div>
    </div>
  );
}
