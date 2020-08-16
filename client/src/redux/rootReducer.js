import { combineReducers } from "redux";
import { contactsReducer } from "./contactReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  app: appReducer,
});
