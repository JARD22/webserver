// Creando el servidor

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//hbs para usar parciales
const hbs = require('hbs')
app.set('view engine', 'hbs');
require('./views/hbs/helpers')


//registrando nuevos parciales
hbs.registerPartials(__dirname + '/views/parciales')

//Se utiliza para servir contenido estatico, util para paginas solo con informacion
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about');
})


app.get('/data', (req, res) => {

    res.send('probando Express');
})


app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
})