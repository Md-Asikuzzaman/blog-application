import { create } from 'zustand';

interface SearchType {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchType>((set) => ({
  search: '',
  setSearch: (search: string) => {
    set((state) => ({
      ...state,
      search,
    }));
  },
}));
