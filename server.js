const express = require('express')
const app = express()
const port = 3000
var hbs = require('hbs');
const path =require ('path');
const rutasFront = require('./routes/front.js');
const rutasBack = require('./routes/back.js');
require('./views/helpers/helpers.js');

app.set('view engine', 'hbs');
app.set('views',[
  path.join('./views/front'),
  path.join('./views/back'),
  path.join('./views'),
]);


/* PARCIALES*/

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.use ('/', rutasFront);
app.use ('/', rutasBack);


//RUTA DE ERROR 404

app.use((req,res,next)=>{
  res.status(404).render('404',{
    titulo: "Neolaser",
    nombre: "Upss!",
  })
});






app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})