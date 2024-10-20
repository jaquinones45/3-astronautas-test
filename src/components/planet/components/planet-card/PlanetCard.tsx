import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

import styles from "./PlanetCard.module.css";

import { PlanetCardProps } from '@/types/planetCardProps';

import useFavoritePlanet from '@/hooks/useFavoritePlanet';

const PlanetCard: FC<PlanetCardProps> = ({ id, name, imageUrl, mass, favorite, orientation = 'vertical' }) => {
  const { isFavorite, toggleFavorite } = useFavoritePlanet({ planetId: id, favorite });

  return (
    <div className={orientation === 'horizontal' ? styles.cardHorizontal : styles.card}>
      <Link id="link" href={`/${id}`}>
        <Image
          src={imageUrl}
          alt={name}
          className={styles.image}
          width={500}
          height={500}
        />
        <div className={styles.content}>
          <span className={styles.title}>{name}</span>
          <p className={styles.desc}>
            Masa: {mass}
          </p>
          <div className={styles.action}>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite();
              }}
              className={styles.heartButton}
            >
              {isFavorite ? (
                <BsSuitHeartFill />
              ) : (
                <BsSuitHeart />
              )}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanetCard;