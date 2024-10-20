import { GetServerSideProps, NextPage } from 'next';

import { PlanetProps } from '@/types/planetProps';

import MainLayout from '@/layout/MainLayout';

import PlanetDetail from '@/components/planet/pages/planet-detail/PlanetDetail';

interface PlanetDetailProps {
  planet: PlanetProps;
};

const Detail: NextPage<PlanetDetailProps> = ({ planet }) => (
  <MainLayout>
    <PlanetDetail planet={planet} />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const res = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`);
  const data = await res.json();

  return {
    props: {
      planet: {
        ...data,
        image: `/image/${data.id}.jpg`,
        favorite: false,
      },
    },
  };
};

export default Detail;
