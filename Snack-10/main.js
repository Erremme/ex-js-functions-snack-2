/*
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/

function creaThrottler(func, intervall){
    let lastExecution = 0;
      return  function() {
        const now = Date.now();
        if(now - lastExecution >= intervall){
            func();
            lastExecution = now;
        }
       
      }
 }

   const throttler = creaThrottler(() => console.log("Funzione eseguita!"), 2000);
    throttler();
    throttler(); // Non verrà eseguita
    setTimeout(throttler, 3000); // Verrà eseguita dopo 3 secondi