const math = require('./math.js'); //se crea la constante para acceder a los metodos de math
const file = require('./file.js'); //se crea la constante para acceder a los metodos de file
const server = require('./server.js'); //se crea la constante para acceder a los metodos de server

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
server.iniciar();