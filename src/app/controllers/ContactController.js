const ContactRepository = require ('../repositories/ContactsRepository');

class ContacController{
  
  async index(request, response){
    // Lista todos os registros
    const contacts = await ContactRepository.findAll();
    
    response.json(contacts);
  }

  async show(request, response){
    // Obter UM registro
    const {id} = request.params;

    const contact = await ContactRepository.findById(id);

    if(!contact){
      return response.status(404).json({error: 'User not found'});
    }

    response.json(contact);
  }

  async store(request, response) {
    // Cria novo registro
    const {name, email, phone, category_id} = request.body;
    
    if(!name){
      return response.status(404).json({error: 'Name is required'});
    };

    const contactExist = await ContactRepository.findByEmail(email);
    if(contactExist) {
      return response.status(404).json({error: 'This e-mail is alredy in use'});
    };

    const contact = await ContactRepository.create({
      name, email, phone, category_id
    });

    response.json(contact);
  }

  async update(request, response){
    // Edita UM registro
    const {id} = request.params;
    const {name, email, phone, category_id} = request.body;

    const contactExists = await ContactRepository.findById(id);
    if(!contactExists){
      return response.status(404).json({error: 'User not found'});
    }

    if(!name){
      return response.status(404).json({error: 'Name is required'});
    };

    const contactByEmail = await ContactRepository.findByEmail(email);
    if(contactByEmail && contactByEmail.id !== id) {
      return response.status(404).json({error: 'This e-mail is alredy in use'});
    };

    const contact = await ContactRepository.update(id, { name, email, phone, category_id });

    response.json(contact);
  }

  async delete(request, response){
    // Deletar UM registro
    const {id} = request.params;

    const contact = await ContactRepository.findById(id);

    if(!contact) {
      return response.status(404).json({ error: 'User not found'});
    }

    await ContactRepository.delete(id);
    response.sendStatus(204)
  }
}

module.exports  = new ContacController();
