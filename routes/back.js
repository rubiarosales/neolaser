
const express = require('express');
const router = express.Router();
const backCtrl = require('../controllers/back.js');

//RUTAS DEL BACK
router.get('/nuevo', backCtrl.agregarServicioGET);
  
  router.get('/editar',backCtrl.editarServicioGET);
  
  router.get('/login', backCtrl.loginGET);
  
  router.get('/admin', backCtrl.adminGET);
  

  module.exports = router;