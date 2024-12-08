// @/stores/use-libray-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LibraryItemType = 'library' | 'file';
export type LibraryItem = {
  id: string;
  title: string;
  type: LibraryItemType;
  url?: string;
  icon?: string;
  storeId?: string;
  items?: LibraryItem[];
  isFavorite?: boolean;
  isActive?: boolean;
};

interface LibraryStore {
  library: LibraryItem[];
  // Add actions
  addLibrary: (library: Omit<LibraryItem, 'id'>) => void;
  removeLibrary: (id: string) => void;
  addLibraryItem: (libraryId: string, item: Omit<LibraryItem, 'id'>) => void;
  removeLibraryItem: (libraryId: string, itemId: string) => void;
  toggleLibraryFavorite: (id: string) => void;
  toggleItemFavorite: (libraryId: string, itemId: string) => void;
  moveItem: ({
    libraryId,
    itemId,
    newLibraryId,
    position,
  }: {
    libraryId: string;
    itemId: string;
    newLibraryId: string;
    position: number;
  }) => void;
}

export const useLibraryStore = create<LibraryStore>()(
  persist(
    (set) => ({
      library: [],

      addLibrary: (newLibrary) =>
        set((state) => ({
          library: [
            ...state.library,
            { ...newLibrary, id: crypto.randomUUID() },
          ],
        })),

      removeLibrary: (id) =>
        set((state) => ({
          library: state.library.filter((lib) => lib.id !== id),
        })),

      addLibraryItem: (libraryId, item) =>
        set((state) => ({
          library: state.library.map((lib) =>
            lib.id === libraryId
              ? {
                  ...lib,
                  items: [
                    ...(lib.items || []),
                    { ...item, id: crypto.randomUUID() },
                  ],
                }
              : lib,
          ),
        })),

      removeLibraryItem: (libraryId, itemId) =>
        set((state) => ({
          library: state.library.map((lib) =>
            lib.id === libraryId
              ? {
                  ...lib,
                  items: lib.items?.filter((item) => item.id !== itemId),
                }
              : lib,
          ),
        })),

      toggleLibraryFavorite: (id) =>
        set((state) => ({
          library: state.library.map((lib) =>
            lib.id === id ? { ...lib, isFavorite: !lib.isFavorite } : lib,
          ),
        })),

      toggleItemFavorite: (libraryId, itemId) =>
        set((state) => ({
          library: state.library.map((lib) =>
            lib.id === libraryId
              ? {
                  ...lib,
                  items: lib.items?.map((item) =>
                    item.id === itemId
                      ? { ...item, isFavorite: !item.isFavorite }
                      : item,
                  ),
                }
              : lib,
          ),
        })),
      moveItem: ({ libraryId, itemId, newLibraryId, position }) =>
        set((state) => {
          const currentLibrary = state.library.find(
            (lib) => lib.id === libraryId,
          );
          const newLibrary = state.library.find(
            (lib) => lib.id === newLibraryId,
          );
          const item = currentLibrary?.items?.find(
            (item) => item.id === itemId,
          );
          if (!item) return state;
          // move item to newLibrary
          newLibrary?.items?.splice(position, 0, item);

          // remove item from currentLibrary
          currentLibrary?.items?.splice(
            currentLibrary?.items?.indexOf(item),
            1,
          );

          return {
            library: state.library.map((lib) => ({ ...lib })),
          };
        }),
    }),
    { name: 'app-library' },
  ),
);
