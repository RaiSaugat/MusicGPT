'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { SearchStore, createQueryStore, initCounterStore } from './store';

export type QueryStoreApi = ReturnType<typeof createQueryStore>;

export const QueryStoreContext = createContext<QueryStoreApi | undefined>(
  undefined
);

export interface QueryStoreProviderProps {
  children: ReactNode;
}

export const QueryStoreProvider = ({ children }: QueryStoreProviderProps) => {
  const queryRef = useRef<QueryStoreApi | null>(null);
  if (queryRef.current === null) {
    queryRef.current = createQueryStore(initCounterStore());
  }

  return (
    <QueryStoreContext.Provider value={queryRef.current}>
      {children}
    </QueryStoreContext.Provider>
  );
};

export const useQueryStore = <T,>(selector: (store: SearchStore) => T): T => {
  const queryStoreContext = useContext(QueryStoreContext);

  if (!queryStoreContext) {
    throw new Error(`useQueryStore must be used within QueryStoreProvider`);
  }

  return useStore(queryStoreContext, selector);
};
