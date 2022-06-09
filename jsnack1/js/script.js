// Creo l'array
const array = [];

// Lo popolo di numeri random
for( let i = 0; i < 99; i++ ) {
    let randomNumber = Math.floor(Math.random() * 100) +1;
    array.push(randomNumber);
}

// Seleziono i div per numeri pari e dispari
const evenDiv = document.getElementById('even');
const oddDiv = document.getElementById('odd');

// Scorro tutti i numeri dell'array
for( let i = 0; i < array.length; i++) {
    // Se pari o dispari li stampo nel div appropriato
    let thisNumber = array[i];

    if (thisNumber % 2 === 0) {
        evenDiv.innerHTML += array[i] + ' ';
    } else {
        oddDiv.innerHTML += array[i] + ' ';
    }
}