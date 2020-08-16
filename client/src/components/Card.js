import React, { useState } from "react";
import { removeContact, markedContact } from "../redux/actions";
import { useDispatch } from "react-redux";

export const Card = ({ contact }) => {
  const dispatch = useDispatch();
  const [markedId, setMarked] = useState(false);

  const handleMarkContact = (id) => () => {
    dispatch(markedContact(id));
    setMarked(id);
  };

  const handleDeleteContant = (id) => () => {
    dispatch(removeContact(id));
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5
          className="card-title"
          // Just for example
          style={{
            color: contact.marked ? "red" : "black",
          }}
        >
          {contact.name}
        </h5>
        <p className="card-text">{contact.value}</p>
        <button
          className="btn btn-primary"
          onClick={handleMarkContact(contact.id)}
          disabled={contact.marked}
        >
          Отметить
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDeleteContant(contact.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
