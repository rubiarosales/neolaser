const express = require('express')
const app = express()
const port = 3000
var hbs = require('hbs');
const path =require ('path');
const servicios = require ('./data/service.json');
app.set('view engine', 'hbs');
app.set('views',[
  path.join('./views/front'),
  path.join('./views/back'),
  path.join('./views'),
]);


/* PARCIALES*/

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));


//RUTAS DEL FRONT
app.get('/', (req, res) => {
    res.render('index',{
        titulo: "Neolaser",
        servicios: servicios.servicios,
        entradas: servicios.post
    })
})

app.get('/nosotros', (req, res) => {
  res.render('about',{
      titulo: "Neolaser",
      nombre: "Sobre Nosotros"
  })
})

app.get('/contacto', (req, res) => {
  res.render('contact',{
      titulo: "Neolaser",
      nombre: "Contacto"
  })
})

app.get('/servicios', (req, res) => {
  res.render('services',{
      titulo: "Neolaser",
      nombre: "Servicios",
      servicios: servicios.servicios
  })
})

app.get('/blog', (req, res) => {
  res.render('blog',{
      titulo: "Neolaser",
      nombre: "Blog",
      entradas: servicios.post
  })
})

//RUTAS DEL BACK
app.get('/nuevo', (req, res) => {
  res.render('agregar-servicio',{
    titulo: "Neolaser",
    nombre: "Agregar servicios",
  })
});

app.get('/editar', (req, res) => {
  res.render('editar-servicio',{
    titulo: "Neolaser",
    nombre: "Editar Servicios",
  })
});

app.get('/login', (req, res) => {
  res.render('login',{
    titulo: "Neolaser",
    nombre: "Iniciar Sesión",
  })
});

app.get('/admin', (req, res) => {
  res.render('admin',{
    titulo: "Neolaser",
    nombre: "Administrador",
  })
});

app.use((req,res,next)=>{
  res.status(404).render('404',{
    titulo: "Neolaser",
    nombre: "Upss!",
  })
});






app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})