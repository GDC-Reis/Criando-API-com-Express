const ContactRepository = require ('../repositories/ContactsRepository');

class ContacController{
  
  async index(request, response){
    // Lista todos os registros
    const contacts = await ContactRepository.findAll();
    
    response.json(contacts);
  }

  show(){
    // Obter UM registro
  }

  update(){
    // Edita UM registro
  }

  delete(){
    // Deletar UM registro
  }
}

module.exports  = new ContacController();
