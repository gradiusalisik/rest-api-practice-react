import { SHOW_LOADER, HIDE_LOADER } from "./types";

const initialState = {
  isLoading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoader: true };
    case HIDE_LOADER:
      return { ...state, isLoader: false };
    default:
      return state;
  }
};
