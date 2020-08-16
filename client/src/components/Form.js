import React, { useState } from "react";
import { addContact } from "../redux/actions";
import { useDispatch } from "react-redux";

export const Form = () => {
  const initialForm = {
    name: "",
    value: "",
  };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const canCreate = true;

  const handleChangeInput = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(newForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(form));
    setForm(initialForm);
  };

  return (
    <form className="form-inlne mb-3" onSubmit={handleSubmit}>
      <div className="form-group mr-5">
        <label htmlFor="name" className="mr-3">
          Имя
        </label>
        <input
          type="text"
          className="form-control"
          value={form.name}
          id="name"
          name="name"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group mr-5">
        <label htmlFor="value" className="mr-3">
          Значение
        </label>
        <input
          type="text"
          name="value"
          value={form.value}
          className="form-control"
          id="value"
          onChange={handleChangeInput}
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={!canCreate}>
        Создать
      </button>
    </form>
  );
};
