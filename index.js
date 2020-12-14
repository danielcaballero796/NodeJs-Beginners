//const math = require('./beginner/math.js'); //se crea la constante para acceder a los metodos de math
//const file = require('./beginner/file.js'); //se crea la constante para acceder a los metodos de file
//const server = require('./beginner/server.js'); //se crea la constante para acceder a los metodos de server

/**
 * Metodo de sumar
 */
//console.log(math.add(1, 2));

/**
 * Metodo para crear un archivo
 */
//file.crearArchivo("./miArchivo.txt", "El texto del nuevo archivo");

/**
 * Metodo para leer un archivo
 */
//file.leerArchivo("./miArchivo.txt");

/**
 * Metodo para crear e iniciar un servidor
 */
//server.iniciar();

/**
 * ------------------Servidor con Framework Express------------------
 */
// eslint-disable-next-line no-undef
const express = require("express"); //se crea la constante para acceder a los metodos de express
// eslint-disable-next-line no-undef
require("colors"); //se crea la constante para acceder a los metodos de colors
const morgan = require("morgan"); //se crea la constante para acceder a los metodos de morgan(middleware)
const app = express(); //se crea el servidor por estadar se llama app

/**
 * Settings
 */
app.set('appName', 'Curso Express + NodeJS');
app.set('port', 3000);
app.set('views', './views'); //se debe definir la carpeta de vistas
app.set('view engine', 'ejs');


/**
 * Middlewars
 */
app.use(express.json()); //para que express entienda los formatos json
app.use(morgan('dev'));

/**
 * Routes
 */

/**
 * Ruta para renderizar al inicio de la página
 */
app.get("/", (req, res) => {
    const data = [
        { name: 'Nombre 1' },
        { name: 'Nombre 2' },
        { name: 'Nombre 3' },
        { name: 'Nombre 4' },
        { name: 'Nombre 5' },
    ]
    res.render('index.ejs', { people: data });
});

//ruta que podria utilizarse como un middleware se añade next como parametro (solo para user)
app.all("/user", (req, res, next) => {
    console.log(`Route Recieved ${req.protocol}://${req.get('host')}${req.originalUrl}`); //req es la info del navegador
    next(); //Se usa para que continue hacia el tipo de metodo solicitado
});

/**
 * Ruta para obtener los usuarios
 */
app.get("/user", (req, res) => {
    res.json({
        name: 'Daniel',
        lastname: 'Caballero',
        age: 24
    });
    //res.end();
});

/**
 * Ruta para regitrar los usuarios
 */
app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("<h1>Insert Express y NodeJs</h1>");
});

/**
 * Ruta para actualizar los usuarios
 */
app.put("/user", (req, res) => {
    res.send(`Se actualizara el usuario ${req.body.id}`); //debe hacerse con esas comillas
});

/**
 * Ruta para eliminar los usuarios
 */
app.delete("/user", (req, res) => {
    res.send(`Se eliminara el usuario ${req.body.id}`); //debe hacerse con esas comillas
});

//ruta dinamica se coloca :id para recibir un id por params
app.delete("/user/:id", (req, res) => {
    console.log('eliminado');
    res.send(`Se eliminara el usuario ${req.params.id}`); //debe hacerse con esas comillas
});

/**
 * Middleware de express
 * se pone al final para que si entra a ninguna ruta anterior vaya al inicio de la página
 */
app.use(express.static('public'))

/**
 * Se le asigna puerto al servidor
 */
app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log(("Server on port " + app.get('port')).green);
});
