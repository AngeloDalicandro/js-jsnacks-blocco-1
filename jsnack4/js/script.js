// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


// Creo un array vuoto
const myArray = [];

// Imposto il loop per richiedere i numeri all'utente 6 volte
for( let i = 0; i < 6; i++) {
    // Chiedo il numero tramite un promp
    let userNumber = prompt('Dammi un numero');

    // Imposto la condizione per stamparlo nell'array e stampo
    if( userNumber % 2 !== 0 ) {
        myArray.push( userNumber );
    }
}

// Stampo in console l'array per verificare che l'esercizio sia corretto
console.log(myArray)