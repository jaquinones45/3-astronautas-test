export interface PlanetStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
