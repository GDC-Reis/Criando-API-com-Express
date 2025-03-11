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

  store() {
    // Criar novo registro
  }

  update(){
    // Edita UM registro
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
