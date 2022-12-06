/* Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

const cube = createCube(3)
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).

Otros ejemplos de cubos:

const cubeOfOne = createCube(1)
/\_\
\/_/
const cubeOfTwo = createCube(2)
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
A tener en cuenta:

Fíjate bien en los espacios en blanco que hay en el cubo.
El cubo tiene que ser simétrico.
Asegúrate de usar los símbolos correctos.
Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.
Basado en esta kata de Codewars */

// const cube = createCube(3)
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/
// const cubeOfOne = createCube(1)
// /\_\
// \/_/
// const cubeOfTwo = createCube(2)
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/

// el cubo inicia con /\_/ y termina con \/_/ y tiene tantos \/_/ como size
// el cubo tiene tantos saltos de lineas como size (\n)

/* function createCube (size) {
    let cube = ""
    for (let i = 0; i < size; i++) {
        let row = ""
        for (let j = 0; j < size; j++) {
            if (i === 0) {
                if (j === 0 || j === size - 1) row += "\\";
                else if (j === 1 || j === size - 2) row += "/";
                else row += " ";
            } else if (i === size - 1) {
                if (j === 0 || j === size - 1) row += "/";
                else if (j === 1 || j === size - 2) row += "\\";
                else row += " ";
            } else {
                if (j === 0 || j === size - 1) row += "/";
                else if (j === 1 || j === size - 2) row += "/";
                else row += "_";
            }
        }
        if (i === size - 1) cube += row;
        else cube += row + "";
    }
    return cube;
} */

function createCube(size) {
    let cube = []
    for (let i = size; i > 0; i--) {
        cube.unshift(`${" ".repeat(size - i)}${"/\\".repeat(i)}${"_\\".repeat(size)}`)
        cube.push(`${" ".repeat(size - i)}${"\\/".repeat(i)}${"_/".repeat(size)}`)
    }
    return cube.join("\n")
}