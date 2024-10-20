export interface PlanetStore {
  search: string;
  setSearch: (term: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
