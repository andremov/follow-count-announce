export type GeneralState = {
  shortLivedToken: string | undefined;
  shortLivedTokenResolved: boolean;
  longLivedToken: string | undefined;
  longLivedTokenResolved: boolean;
  userID: number | undefined;
};

export type GeneralSlice = GeneralState & {
  setShortLivedToken: (code: string | undefined) => void;
  setLongLivedToken: (code: string | undefined) => void;
  setUserID: (newId: number | undefined) => void;
};
