const servicios = require ('../data/service.json');

const indexGET = (req, res) => {
    res.render('index',{
        titulo: "Neolaser",
        servicios: servicios.servicios,
        entradas: servicios.post
    })
};

const nosotrosGET =  (req, res) => {
    res.render('about',{
        titulo: "Neolaser",
        nombre: "Sobre Nosotros"
    })
  };

const contactGET = (req, res) => {
    res.render('contact',{
        titulo: "Neolaser",
        nombre: "Contacto"
    })
  };
  
  const serviceGET = (req, res) => {
    res.render('services',{
        titulo: "Neolaser",
        nombre: "Servicios",
        servicios: servicios.servicios
    })
  };
  
  const blogGET = (req, res) => {
    res.render('blog',{
        titulo: "Neolaser",
        nombre: "Blog",
        entradas: servicios.post
    })
  };

  module.exports = {
    indexGET,
    nosotrosGET,
    contactGET,
    serviceGET,
    blogGET
  };