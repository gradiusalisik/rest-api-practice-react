import {
  FETCH_CONTACTS,
  CREATE_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  DELETE_CONTACT_SUCESS,
  MARK_CONTACT,
  MARK_CONTACT_SUCCESS,
} from "./types";

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...state, contacts: action.payload };
    case ADD_CONTACT:
      return { ...state, contact: action.payload };
    case CREATE_CONTACT:
      return { ...state, contacts: state.contacts.concat([action.payload]) };
    case DELETE_CONTACT:
      return { ...state, id: action.payload };
    case DELETE_CONTACT_SUCESS:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case MARK_CONTACT:
      return { ...state, markedId: action.payload };
    default:
      return state;
  }
};
