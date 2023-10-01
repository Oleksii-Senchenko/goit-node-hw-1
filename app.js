const contacts = require("./db");

const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const responce = await contacts.allContacts();
      console.log(responce);
      break;

    case "delete":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      return console.log(newContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();
invokeAction(options);
