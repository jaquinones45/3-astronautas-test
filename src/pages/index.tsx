import { GetServerSideProps } from 'next';

import { PlanetProps } from '@/types/planetProps';

import MainLayout from '@/layout/MainLayout';

import PlanetList from '@/components/planet/pages/planet-list/PlanetList';

const Home = ({ bodies }: { bodies: PlanetProps[] }) => (
  <MainLayout>
    <PlanetList bodies={bodies} />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true');
  const data = await res.json();

  const planets = data.bodies || [];

  const bodies = planets?.filter((planet: PlanetProps) => planet.id !== 'sol' && planet.id !== 'moon' && planet.isPlanet);

  return {
    props: { bodies },
  };
};

export default Home;
