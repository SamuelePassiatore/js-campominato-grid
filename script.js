console.log('JS OK');

/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/

// ! FUNCTIONS ------------------------------------------------
const createCell = (content) => {
    const cell = document.createElement('div');
    cell.append(content);
    cell.classList.add('cell');
    return cell;
}


// ! OPERAZIONI PRELIMINARI -----------------------------------
// Prendo gli elementi dal DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button');

// Impostazioni iniziali 
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// ! OPERAZIONI D'AVVIO ---------------------------------------
let gridGenerated = false;
// Aggancio l'event listener al button
button.addEventListener('click', function () {
    if (gridGenerated){
        return;
    } else {
        gridGenerated = true;
        // Renderizziamo le celle
        for (let i = 0; i < totalCells; i++){
        // Creo una cella 
        const cell = createCell(i + 1);
        // Aggiungo un event listener sulla singola cella per cambiare colore
        cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
            console.log(i + 1);
        });
        // Appendo in pagina
        grid.appendChild(cell);
        }
    }
});
