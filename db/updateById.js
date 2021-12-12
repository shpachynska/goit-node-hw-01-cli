const updateContacts = require("./updateContacts");
const getAll = require("./getAll");

const updateById = async ({ id, name, email, phone }) => {
  const contacts = await getAll();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, name, email, phone };
  await updateContacts(contacts);

  return contacts[idx];
};

module.exports = updateById;
