console.log('JS OK');

/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/

// ! FUNCTIONS ------------------------------------------------
const createCell = (number) => {
    const cell = document.createElement('div');
    cell.append(number);
    cell.classList.add('cell');
    return cell;
}

// ! OPERAZIONI PRELIMINARI -----------------------------------
// Prendo gli elementi dal DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button');
const difficultyLevel = document.getElementById('difficulty-level');

// ! OPERAZIONI D'AVVIO ---------------------------------------
// Aggancio l'event listener al button
button.addEventListener('click', () => {
  // Cambio il testo del bottone ricomincia
  button.innerText = 'Ricomincia';
  // Svuoto la griglia
  grid.innerHTML = '';

  // Prendo il livello dell'utente
  level = difficultyLevel.value;

  // Aggiunta classe alla griglia
  grid.classList.add(level);

  // Calcolo righe e colonne
  let cols;
  let rows;
  
  switch (level) {
    case 'medium':
      cols = rows = 9;
      break;
    case 'easy':
      cols = rows = 10;
      break;
    case 'hard':
      cols = rows = 7;
  }

  // Calcolo il totale delle celle
  const totalCells = cols * rows;

    // Renderizzo le celle
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
});
