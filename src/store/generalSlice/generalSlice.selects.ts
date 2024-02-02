import { shallow } from "zustand/shallow";

import { useFollowStore } from "../followStore";

export const useSelectGeneralState = () =>
  useFollowStore(({}) => ({}), shallow);
