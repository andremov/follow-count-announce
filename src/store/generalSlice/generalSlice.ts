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
  shortLivedToken: undefined,
  shortLivedTokenResolved: false,
  
  longLivedToken: undefined,
  longLivedTokenResolved: false,

  userID: undefined,

  setShortLivedToken: (code: string | undefined) => {
    set({ shortLivedToken: code, shortLivedTokenResolved: true });
  },

  setLongLivedToken: (code: string | undefined) => {
    set({ longLivedToken: code, longLivedTokenResolved: true });
  },

  setUserID: (newId: number | undefined) => {
    set({ userID: newId });
  }
});
