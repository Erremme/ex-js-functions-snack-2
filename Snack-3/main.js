/*
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
 */

const add = ( num1 , num2) => num1 + num2;

const eseguiOperazione = (num1, num2, callBack) => callBack(num1, num2);

console.log(eseguiOperazione(5, 10, add));
 
