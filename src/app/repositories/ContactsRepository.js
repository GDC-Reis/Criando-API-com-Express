const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Gustavo',
    email: 'gustavo@gmail.com',
    phone:  '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@gmail.com',
    phone:  '321321321',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => resolve(
      contacts.find((contact) => contact.id === id)));
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();