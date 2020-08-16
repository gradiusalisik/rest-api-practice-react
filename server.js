const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { v4 } = require("uuid");
const app = express();

const port = 5000;

let CONTACTS = [
  { id: v4(), name: "Владислав", value: "+7-921-100-20-30", marked: false },
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET
app.get("/api/contacts", (req, res) => {
  // status 200 === success server
  res.status(200).json(CONTACTS);
});

// POST
app.post("/api/contacts", (req, res) => {
  const contact = { ...req.body, id: v4(), marked: false };

  CONTACTS.push(contact);
  res.status(201).json(contact);
});

// DELETE
app.delete("/api/contacts/:id", (req, res) => {
  CONTACTS = CONTACTS.filter((c) => c.id !== req.params.id);

  res.status(200).json({ message: "Контакт был удалён" });
});

// PUT
app.put("/api/contacts/:id", (req, res) => {
  const idx = CONTACTS.findIndex((c) => c.id === req.params.id);
  CONTACTS[idx] = req.body;

  res.json(CONTACTS);
});

app.use(express.static(path.resolve(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(port, () =>
  console.log(`Server has been started on port ${port}...`)
);
