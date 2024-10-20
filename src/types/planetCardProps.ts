export interface PlanetCardProps {
  id: string;
  name: string;
  imageUrl: string;
  favorite: boolean;
  mass: string;
  orientation?: 'horizontal' | 'vertical';
};
