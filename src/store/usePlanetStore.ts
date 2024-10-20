import { create } from 'zustand';

import { PlanetStore } from '@/types/PlanetStore';

export const usePlanetStore = create<PlanetStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  sortOrder: 'asc',
  setSortOrder: (order) => set({ sortOrder: order }),

  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
