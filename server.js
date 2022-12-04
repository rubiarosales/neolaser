const express = require('express')
const app = express()
const port = 3000
var hbs = require('hbs');
const servicios = require ('./data/service.json');

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


app.set('view engine', 'hbs');


/* PARCIALES*/

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));




app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})