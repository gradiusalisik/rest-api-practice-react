import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  REQUEST_CONTACTS,
  FETCH_CONTACTS,
  CREATE_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT_SUCESS,
  DELETE_CONTACT,
  MARK_CONTACT,
} from "./types";
import { showLoader, hideLoader } from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_CONTACTS, fetchContacts);
  yield takeEvery(ADD_CONTACT, addContact);
  yield takeEvery(DELETE_CONTACT, deleteContact);
  yield takeEvery(MARK_CONTACT, markContact);
}

function* fetchContacts() {
  yield put(showLoader());
  const payload = yield call(() => request("/api/contacts"));

  yield put({ type: FETCH_CONTACTS, payload });
  yield put(hideLoader());
}

function* addContact() {
  const contact = yield select((state) => state.contacts.contact);
  const newContact = yield call(() =>
    request("/api/contacts", "POST", contact)
  );

  yield put({ type: CREATE_CONTACT, payload: newContact });
}

function* deleteContact() {
  const contactId = yield select((state) => state.contacts.id);
  yield call(() => request(`/api/contacts/${contactId}`, "DELETE"));

  yield put({ type: DELETE_CONTACT_SUCESS, payload: contactId });
}

function* markContact() {
  const markedId = yield select((state) => state.contacts.markedId);
  const contacts = yield select((state) => state.contacts.contacts);
  const contact = contacts.find((c) => c.id === markedId);
  const newContacts = yield call(() =>
    request(`/api/contacts/${markedId}`, "PUT", {
      ...contact,
      marked: true,
    })
  );
  yield put({ type: FETCH_CONTACTS, payload: newContacts });
}

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    return await response.json();
  } catch (e) {
    console.warn("Error", e.message);
  }
}
