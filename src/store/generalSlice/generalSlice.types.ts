export type GeneralState = {
  authCode: string | undefined;
  authCodeResolved: boolean;
};

export type GeneralSlice = GeneralState & {
  setAuthCode: (code: string | undefined) => void;
};
