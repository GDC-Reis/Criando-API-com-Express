const {Router} = require('express');
const ContacController = require('./app/controllers/ContactController');

const  router = Router();

router.get(
  '/contacts', 
  (request, response, next) => {
    request.appId = 'MeuAppId';
    next(); // Pula para o proximo middleware
  },
  ContacController.index,
);
router.get('/contacts/:id', ContacController.show);
router.delete('/contacts/:id', ContacController.delete);




module.exports = router