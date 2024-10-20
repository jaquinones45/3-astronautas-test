import { NextPage } from 'next';
import Image from 'next/image';

import { PlanetDetailProps } from '@/types/planetProps';

import useFavoritePlanet from '@/hooks/useFavoritePlanet';

import styles from './PlanetDetail.module.css';

const PlanetDetail: NextPage<PlanetDetailProps> = ({ planet }) => {
  const { isFavorite, toggleFavorite } = useFavoritePlanet({ planetId: planet.id, favorite: planet.favorite });

  return (
    <div className={styles.container}>
      <div className={styles.planet}>
        <div className={styles.image}>
          <Image
            src={planet.image}
            alt={planet.englishName}
            className={styles.planetImage}
            width={500}
            height={500}
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>{planet.englishName}</h1>
          <p className={styles.mass}>
            <strong>Masa:</strong> {planet.mass.massValue} × 10<sup>{planet.mass.massExponent}</sup> kg
          </p>
          <button
            onClick={toggleFavorite}
            className={isFavorite ? styles.removeButton : styles.addButton}
          >
            {isFavorite ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
