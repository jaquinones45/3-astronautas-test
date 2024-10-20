import { useEffect, useState } from 'react'

import { useFavoritePlanetProps } from '@/types/useFavoritePlanetProps';

const useFavoritePlanet  = ({ planetId, favorite }: useFavoritePlanetProps) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isFavoritePlanet = storedFavorites.includes(planetId);
    setIsFavorite(isFavoritePlanet);
  }, [planetId]);

  const toggleFavorite = () => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      storedFavorites = storedFavorites.filter((id: string) => id !== planetId);
    } else {
      storedFavorites.push(planetId);
    }

    localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    setIsFavorite(!isFavorite);
  };

  return {
    isFavorite,
    toggleFavorite,
  } as const;
}

export default useFavoritePlanet;