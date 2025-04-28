/* 
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

function somma(num1, num2) {
    return num1 + num2;

}

console.log(somma(5, 10));

const plus = function(num1, num2) {
    return num1 + num2;
}

console.log(plus(5, 10));

 const add = ( num1 , num2) => num1 + num2;

console.log(add(5, 10)); 