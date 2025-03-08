class ContacController{
  index(request, response){
    // Lista todos os registros
    response.send('Send from Contract Controller');
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
