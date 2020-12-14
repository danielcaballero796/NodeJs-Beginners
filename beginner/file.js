const fs = require('fs'); //modulo para archivos de nodeJs
const File = {};

function crearArchivo(nombre, texto) {
    //codigo asincrono                           la funcion se llama callback
    fs.writeFile(nombre, texto, function(err) {
        if (err) {
            console.error(err);
        }
        console.log('Archivo Creado');
    });
}

function leerArchivo(nombre) {
    fs.readFile(nombre, function(err, data) {
        if (err) {
            console.error(err);
        }
        if (data) {
            console.log(data.toString());
        }
    });
}

File.crearArchivo = crearArchivo;
File.leerArchivo = leerArchivo;

module.exports = File;