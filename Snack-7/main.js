
/*
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

function eseguiEferma(message , timeOn , timeOff) {

    const intervalId = setInterval(() => {
        console.log(message);
    }, timeOn);
    setTimeout(() => {
        clearInterval(intervalId);
    }, timeOff);
  

}

eseguiEferma("sto eseguendo", 1000,6000);