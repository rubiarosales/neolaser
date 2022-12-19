const servicios = require ('../data/service.json');

const agregarServicioGET =  (req, res) => {
    res.render('agregar-servicio',{
      titulo: "Neolaser",
      nombre: "Agregar servicios",
    })
  };
  
  const editarServicioGET =  (req, res) => {
    res.render('editar-servicio',{
      titulo: "Neolaser",
      nombre: "Editar Servicios",
    })
  };
  
  const loginGET =  (req, res) => {
    res.render('login',{
      titulo: "Neolaser",
      nombre: "Iniciar Sesión",
    })
  };
  
  const adminGET =   (req, res) => {
    res.render('admin',{
      titulo: "Neolaser",
      nombre: "Administrador",
      servicios: servicios.servicios,
      entradas: servicios.post
    })
  };

  module.exports = {
    agregarServicioGET,
    editarServicioGET,
    loginGET,
    adminGET
  };