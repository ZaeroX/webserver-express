const express = require('express');
const app = express();

//app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    //res.send('Hello world')
    let salida = {
        nombre: 'victor',
        edad: 35,
        url: req.url
    };

    res.send(salida);
});


app.get('/data', (req, res) => {
    //res.send('Hello world')
    let salida = {
        nombre: 'data victor',
        edad: 35,
        url: req.url
    };

    res.send(salida);
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});