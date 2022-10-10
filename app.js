const express = require ('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001;
app.listen (port, () => console.log('Servidor corriendo en el puerto: ${port}'));

app.use(express.static('public'));

app.get ('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html');  /* ---> CON RESOLVE */
    res.sendFile (htmlPath)
})

app.get ('/register', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile (htmlPath)
})

app.get ('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile (htmlPath)
})

app.get ('/busqueda', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/busqueda.html');
    res.sendFile (htmlPath)
})