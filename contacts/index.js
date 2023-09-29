const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const { json } = require("stream/consumers");

const filePath = path.join(__dirname, "contacts.json");

const allContacts = async () => {
  const data = await fs.readFile(filePath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await allContacts();
  const foundContact = contacts.find((item) => item.id === id);
  return foundContact || null;
};

const removeContact = async (id) => {
  const contacts = await allContacts();
  const deleteContact = contacts.filter((item) => item.id !== id);
  return deleteContact || null;
};

const addContact = async (name, email, phone) => {
  const contacts = await allContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
  return newContact;
};
module.exports = {
  allContacts,
  getContactById,
  removeContact,
  addContact,
};
