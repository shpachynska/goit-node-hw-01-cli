const { program } = require("commander");

const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactsOperations.removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "action type")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");
program.parse(process.argv);
const options = program.opts();
invokeAction(options);

// const id = "1";
// const item = {
//   name: "fff",
//   email: "fff.Cras@nonenimMauris.net",
//   phone: "(333) 333-4444",
// };

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id });
// invokeAction({ action: "add", ...item });
// invokeAction({ action: "updateById", ...updateItem, id: updateId });
// const removeId = "009f2690-4ed3-48a7-a150-f72cdae15cad";
// invokeAction({ action: "remove", id: removeId });
