const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.render('index',{
        titulo: "Neolaser_ar"
    })

})
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})