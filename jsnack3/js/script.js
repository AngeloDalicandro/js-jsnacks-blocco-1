// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Inizio a contare
let sum = 0;

// Imposto il loop per ripetersi 10 volte
for( let i = 0; i < 10; i++) {
    //chiedo all'utente un numero
    const userNumber = prompt('Dammi un numero')

    // Sommo i numeri dell'utente
    sum += parseInt(userNumber);
}

// Stampo in console fuori dal loop
console.log(sum)