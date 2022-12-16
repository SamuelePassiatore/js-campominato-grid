console.log('JS OK');

/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* 
- Prendo gli elementi dal DOM;
- Aggancio l'event listener al button play;

*/
// ! OPERAZIONI PRELIMINARI -----------------------------------
// Prendo gli elementi dal DOM;
const grid = document.getElementById('grid');
const button = document.getElementById('button');

// Impostazioni iniziali 
const rows = 10;
const cols = 10;
const totalCells = rows * cols;


