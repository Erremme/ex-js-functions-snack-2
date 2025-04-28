/*
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer(time) {
    return function() {
        setTimeout(() => {
            console.log("Timer scaduto!");
        }, time);
    }
}

const timer3s = creaTimer(3000);
timer3s();