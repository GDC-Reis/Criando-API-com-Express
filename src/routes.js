const {Router} = require('express');
const ContacController = require('./app/controllers/ContactController');

const  router = Router();

router.get('/contacts', ContacController.index);

module.exports = router