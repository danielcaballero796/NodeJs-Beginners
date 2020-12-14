//se crea el obj
const Math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('No se puede dividir por 0');
    } else {
        return x1 / x2;
    }

}

//se añaden las funciones al obj
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//se exporta el modulo o objeto
module.exports = Math;

//module.exports tambien permite exp funciones, variables entre otros datos de JS
//exports.nombre=nombre; exp una propiedad de un obj