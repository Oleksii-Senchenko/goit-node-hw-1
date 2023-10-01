const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const filePath = path.join(__dirname, "contacts.json");

const allContacts = async () => {
  const data = await fs.readFile(filePath);
  return JSON.parse(data);
};


const removeContact = async (id) => {
  const contacts = await allContacts();
  const deleteContact = contacts.filter((item) => item.id !== id);
  return deleteContact || null;
};

const add = async (data) => {
  const contacts = await allContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact)
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2))
  return newContact
};

module.exports = {
  allContacts,
  removeContact,
  add,
};
