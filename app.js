const express = require('express');
const app = express();

// Estática : Carpeta con archivos públicos (imagenes, csss, etc)
const path = require('path');
app.use(express.static(path.resolve('public')));

const puerto = 3000;
app.listen(puerto, () => console.log('escuchando puerto ' + puerto));

const devolverVista = (res, ruta) => {
    res.sendFile(path.resolve(__dirname, ruta));
}

app.get('/home', (req, res) => devolverVista( res, 'views/index.html'));
app.get('/contacts', (req, res) => devolverVista( res, 'views/contacto.html'));
app.get('/about-us', (req, res) => devolverVista( res, 'views/nosotros.html'));

app.use((req, res) => devolverVista( res, 'views/404.html'));
