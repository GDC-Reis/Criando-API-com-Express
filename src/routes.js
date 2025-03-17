const {Router} = require('express');
const ContacController = require('./app/controllers/ContactController');

const  router = Router();

router.get('/contacts', ContacController.index,);
router.get('/contacts/:id', ContacController.show);
router.delete('/contacts/:id', ContacController.delete);
router.post('/contacts/', ContacController.store);
router.put('/contacts/:id', ContacController.update);

module.exports = router