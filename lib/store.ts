import { create } from "zustand";

interface SearchType {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchType>((set) => ({
  search: "",
  setSearch: (search: string) => {
    set((state) => ({
      ...state,
      search,
    }));
  },
}));

interface PageCountType {
  currentPage: number;
  resetCurrentPage: () => void;
  incCurrentPageCount: () => void;
  decCurrentPageCount: () => void;
}

export const usePageCountStore = create<PageCountType>((set) => ({
  currentPage: 1,
  resetCurrentPage: () => {
    set(() => ({ currentPage: 1 }));
  },

  incCurrentPageCount: () => {
    set((state) => ({ currentPage: state.currentPage + 1 }));
  },

  decCurrentPageCount: () => {
    set((state) => ({ currentPage: state.currentPage - 1 }));
  },
}));

interface TagActiveType {
  tagId: string;
  setTagId: (id: string) => void;
}

export const useTagActiveStore = create<TagActiveType>((set) => ({
  tagId: "",
  setTagId: (id: string) => {
    set(() => ({
      tagId: id,
    }));
  },
}));
