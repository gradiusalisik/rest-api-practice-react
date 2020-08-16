import {
  REQUEST_CONTACTS,
  SHOW_LOADER,
  HIDE_LOADER,
  ADD_CONTACT,
  DELETE_CONTACT,
  MARK_CONTACT,
} from "./types";

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const fetchContacts = () => ({
  type: REQUEST_CONTACTS,
});

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload,
});

export const removeContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});

export const markedContact = (payload) => ({
  type: MARK_CONTACT,
  payload,
});
