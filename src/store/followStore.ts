/** Libraries **/
import { createWithEqualityFn } from "zustand/traditional";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { createGeneralSlice } from "./generalSlice/generalSlice";
import type { GeneralSlice } from "./generalSlice/generalSlice.types";

export type StoreState = GeneralSlice;

export type FollowStoreMiddlewares = [
  ["zustand/devtools", never],
  ["zustand/persist", unknown],
];

export const useFollowStore = createWithEqualityFn<StoreState>()(
  devtools(
    persist(
      (...methods) => ({
        ...createGeneralSlice(...methods),
      }),
      {
        name: "followStore",
        partialize: (_state) => ({}),
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
  Object.is,
);
