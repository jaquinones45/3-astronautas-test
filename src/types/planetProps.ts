export interface PlanetProps {
  id: string;
  name: string;
  englishName: string;
  image: string;
  isPlanet: boolean;
  favorite: boolean;
  mass: {
    massValue: number;
    massExponent: number;
  };
};

export interface PlanetDetailProps {
  planet: PlanetProps;
};