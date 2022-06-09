// Chiedi un numero di 4 cifre all’utente nel prompt
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo i numeri all'utente
const userNumber = prompt('Dammi un numero di 4 cifre')

// Imposto il valore da cui inizio a contare
let sum = 0;

// Sommo le 4 cifre
for(let x = 0; x < userNumber.length; x++) {
    sum += parseInt(userNumber[x]);
}

// Stampo in console
console.log(sum)