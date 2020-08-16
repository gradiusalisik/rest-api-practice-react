import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";
import { fetchContacts } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const isLoading = useSelector((state) => state.app.isLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  console.log(contacts, "contacts");

  return (
    <div className="container">
      <Form />
      {isLoading ? (
        <Loader />
      ) : contacts.length > 0 ? (
        contacts.map((contact) => <Card contact={contact} key={contact.id} />)
      ) : (
        <p>Контактов пока нет</p>
      )}
    </div>
  );
}

export default App;
