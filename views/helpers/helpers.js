const { default: axios } = require('axios');
var hbs = require('hbs');
let dolar;
//obtener dolar
axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(resultado => {
        dolar = resultado.data[4].casa.venta;
        dolar = dolar.replace(/,/g, ".");
        dolar = parseFloat(dolar);
        console.log(dolar);

    });


hbs.registerHelper('dolarAPeso', precio => {
    const total = dolar * precio;
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total)
});