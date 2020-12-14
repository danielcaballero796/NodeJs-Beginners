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

const server = express(); //se crea el servidor

//rutas
server.get("/", (req, res) => {
    res.send("<h1>Hola Mundo con Express y NodeJs</h1>");
    res.end();
});

server.get("/about", (req, res) => {
    res.send("<h1>About Express y NodeJs</h1>");
    res.end();
});

/**
 * Se le asigna puerto al servidor
 */
server.listen(3000, () => {
    console.log("Server on port 3000".green);
});
