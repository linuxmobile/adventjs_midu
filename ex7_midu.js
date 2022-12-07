/* En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacénes ahora que se acerca la Navidad.. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacénes.

Por ejemplo, si tenemos los siguientes almacenes:

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

/* 
const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
Como ves, los almacénes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.

📝 Summary
Crea una función getGiftsToRefill que reciba tres Array como parámetros.
La función debe devolver un Array con los regalos que hay que reponer.
Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacénes.
Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer. */


// los almacenes pueden tener el mismo regalo repetido varias veces
// pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución
/* function getGiftsToRefill(a1, a2, a3) {
    let giftsToRefill = [];
    for (let i = 0; i < a1.length; i++) {
      if (giftsToRefill.includes(a1[i])) {
        continue;
      }
      if (!a2.includes(a1[i]) && !a3.includes(a1[i])) {
        giftsToRefill.push(a1[i]);
      }
    }
    for (let i = 0; i < a2.length; i++) {
      if (giftsToRefill.includes(a2[i])) {
        continue;
      }
  
      if (!a1.includes(a2[i]) && !a3.includes(a2[i])) {
        giftsToRefill.push(a2[i]);
      }
    }
    for (let i = 0; i < a3.length; i++) {
      if (giftsToRefill.includes(a3[i])) {
        continue;
      }
      if (!a1.includes(a3[i]) && !a2.includes(a3[i])) {
        giftsToRefill.push(a3[i]);
      }
    }
    return giftsToRefill;
  }  10 pts */

/*   function getGiftsToRefill(a1, a2, a3) {
    let giftsToRefill = [];
    [a1, a2, a3].forEach((array) => {
      const otherArrays = [a1, a2, a3].filter((arr) => arr !== array);
      array.reduce((giftsToRefill, gift) => {
        if (otherArrays.every((arr) => !arr.includes(gift)) && !giftsToRefill.includes(gift)) {
          giftsToRefill.push(gift);
        }
        return giftsToRefill;
      }, giftsToRefill);
    });
    return giftsToRefill;
  } 40 pts */

  function getGiftsToRefill(a1, a2, a3) {
    const gifts = [...new Set([...a1, ...a2, ...a3])]; // Combina los tres arrays en uno solo y elimina duplicados
    return gifts.filter((gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1); // Devuelve solo los elementos que aparezcan una única vez en los tres arrays
}  
  