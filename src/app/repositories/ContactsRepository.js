const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gustavo',
    email: 'gustavo@gmail.com',
    phone:  '123123123',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();