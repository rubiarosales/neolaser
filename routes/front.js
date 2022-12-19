
const express = require('express');
const router = express.Router();
const frontCtrl = require('../controllers/front.js');


//RUTAS DEL FRONT
router.get('/', frontCtrl.indexGET);

router.get('/nosotros', frontCtrl.nosotrosGET);

router.get('/contacto', frontCtrl.contactGET);

router.get('/servicios', frontCtrl.serviceGET);

router.get('/blog', frontCtrl.blogGET);

module.exports = router;