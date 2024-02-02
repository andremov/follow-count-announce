/** Libraries **/
import type { StateCreator } from "zustand";

/** Functional **/
import type { FollowStoreMiddlewares, StoreState } from "../followStore";
import type { GeneralSlice } from "./generalSlice.types";

export const createGeneralSlice: StateCreator<
  StoreState,
  [...FollowStoreMiddlewares],
  [],
  GeneralSlice
> = (set) => ({
  authCode: undefined,
  authCodeResolved: false,
  setAuthCode: (code: string | undefined) => {
    set({ authCode: code, authCodeResolved: true });
  },
});
