'use client';

import { createStore } from 'zustand/vanilla';

export type SearchState = {
  queryList: { id: string; query: string; progress: number }[];
  currentQuery: string;
  isProfileDrawerOpen: boolean;
};

export type SearchActions = {
  addQuery: (data: { id: string; query: string; progress: number }) => void;
  setIsProfileDrawerOpen: (data: boolean) => void;
  setCurrentQuery: (data: string) => void;
  updateQuery: (data: { id: string; progress: number }) => void;
};

export const initCounterStore = (): SearchState => {
  return {
    queryList: [
      {
        id: '8k3jf9',
        query: 'Hello from the other side',
        progress: 100,
      },
    ],
    isProfileDrawerOpen: false,
    currentQuery: '',
  };
};

export type SearchStore = SearchState & SearchActions;

export const defaultInitState: SearchState = {
  queryList: [],
  isProfileDrawerOpen: false,
  currentQuery: '',
};

export const createQueryStore = (initState: SearchState = defaultInitState) => {
  return createStore<SearchStore>()((set) => ({
    ...initState,
    addQuery: (newQuery) =>
      set((state) => ({
        queryList: [...state.queryList, { ...newQuery }],
      })),
    setIsProfileDrawerOpen: (isOpen: boolean) =>
      set((state) => ({
        ...state,
        isProfileDrawerOpen: isOpen,
      })),
    setCurrentQuery: (query) =>
      set((state) => ({
        ...state,
        currentQuery: query,
      })),
    updateQuery: (data) =>
      set((state) => ({
        ...state,
        queryList: state.queryList.map((item) => {
          return item.id === data.id
            ? { ...item, progress: data.progress }
            : item;
        }),
      })),
  }));
};
