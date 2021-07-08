/*-------------------------------- Constants --------------------------------*/
const starterDeck = [
  { dA: 14 },
  { dQ: 12 },
  { dK: 13 },
  { dJ: 11 },
  { d10: 10 },
  { d09: 9 },
  { d08: 8 },
  { d07: 7 },
  { d06: 6 },
  { d05: 5 },
  { d04: 4 },
  { d03: 3 },
  { d02: 2 },
  { hA: 14 },
  { hQ: 12 },
  { hK: 13 },
  { hJ: 11 },
  { h10: 10 },
  { h09: 9 },
  { h08: 8 },
  { h07: 7 },
  { h06: 6 },
  { h05: 5 },
  { h04: 4 },
  { h03: 3 },
  { h02: 2 },
  { cA: 14 },
  { cQ: 12 },
  { cK: 13 },
  { cJ: 11 },
  { c10: 10 },
  { c09: 9 },
  { c08: 8 },
  { c07: 7 },
  { c06: 6 },
  { c05: 5 },
  { c04: 4 },
  { c03: 3 },
  { c02: 2 },
  { sA: 14 },
  { sQ: 12 },
  { sK: 13 },
  { sJ: 11 },
  { s10: 10 },
  { s09: 9 },
  { s08: 8 },
  { s07: 7 },
  { s06: 6 },
  { s05: 5 },
  { s04: 4 },
  { s03: 3 },
  { s02: 2 },
];

/*---------------------------- Variables (state) ----------------------------*/
let winner,
  cpuPlaying,
  cpuWin,
  playerPlaying,
  playerWin,
  warWinner,
  playerAnte,
  cpuAnte;

/*------------------------ Cached Element References ------------------------*/
let playBtn = document.getElementById("#playBtn");
let replayBtn = document.getElementById("#replayBtn");
let playerCompCard = document.getElementById("playerCompCard")
let cpuCompCard = document.getElementById('cpuCompCard')
let 
/*----------------------------- Event Listeners -----------------------------*/
document.getElementById("playBtn").addEventListener("click", render);
document.getElementById("replayBtn").addEventListener("click", init);

/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  winner = null;
  cpuPlaying = [];
  cpuWin = [];
  playerAnte = [];
  playerPlaying = [];
  playerWin = [];
  platerAnte = [];
}
console.log("after init()");
function render() {
  //display the state of game i.e image of cards into correct div
  let playerCard = playerPlaying[0]
  let cpuCard = cpuPlaying[0]
  console.log(playerPlaying[0])
  // get key from card to update the div class 
  let playerClass = Object.keys(playerCard)[0];
  let cpuClass = Object.keys(cpuCard)[0];
  //remove all classes from cards
  console.log(playerClass)
  //add class to cards
  playerCompCard.classList.add(playerClass)
  playerCompCard.classList.remove('outline')
  //display cards to div
  console.log(playerPlaying)
  //after user interacts progress or time out
  //run card comp
}

function compCards() {
  // compare the value of top index  between two arrays
  //need to add shift between each push
  if (playerPlaying[0] > cpuPlaying[0]) {
    //pushing playing cards into player win arr
    playerWin.push(playerPlaying[0]);
    playerPlaying.shift();
    playerWin.push(cpuPlaying[0]);
    cpuPlaying.shift();
    playerWin.push(cpuAnte[0]);
    cpuAnte.shift()
    playerWin.push(cpuAnte[0]);
    cpuAnte.shift()
    playerWin.push(cpuAnte[0]);
    cpuAnte.shift()
    playerWin.push(playerAnte[0]);
    playerAnte.shift()
    playerWin.push(playerAnte[0]);
    playerAnte.shift()
    playerWin.push(playerAnte[0]);
    playerAnte.shift()
    // pushing playing arr into cpu winning arrs and removing cards after
  } else if (playerPlaying[0] < cpuPlaying[0]) {
    cpuWin.push(playerPlaying[0]);
    playerPlaying.shift()
    cpuWin.push(cpuPlaying[0]);
    cpuPlaying.shift()
    cpuWin.push(cpuAnte[0]);
    cpuAnte.shift()
    cpuWin.push(cpuAnte[0]);
    cpuAnte.shift()
    cpuWin.push(cpuAnte[0]);
    cpuAnte.shift()
    cpuWin.push(playerAnte[0]);
    playerAnte.shift()
    cpuWin.push(playerAnte[0]);
    playerAnte.shift()
    cpuWin.push(playerAnte[0]);
    playerAnte.shift()
  } else {
    //cards match
    warStart();
  }
  //removing the cards from the deck
  playerPlaying.shift();
  cpuPlaying.shift();
  
}

function warStart() {
  platerAnte.push(playerPlaying[0]);
  playerPlaying.shift();
  platerAnte.push(playerPlaying[0]);
  playerPlaying.shift();
  platerAnte.push(playerPlaying[0]);
  playerPlaying.shift();
  cpuAnte.push(cpuPlaying[0]);
  cpuPlaying.shift();
  cpuAnte.push(cpuPlaying[0]);
  cpuPlaying.shift();
  cpuAnte.push(cpuPlaying[0]);
  cpuPlaying.shift();
  compCards();
}
  
  //helper function to shuffle deck type
function shuffle(deck) {
  deck.forEach((card, idx) => {
    let randIdx = Math.floor(Math.random() * deck.length);
    //declares var otherCard and to store value at randIdx of the deck[]
    const otherCard = deck[randIdx];
    //insert random card into array at current idx
    deck[idx] = otherCard;
    //insert current card into array at rand indx
    deck[randIdx] = card;
  });
  return deck;
}

function dealAll(deck) {
  //split deck array into two new arrays to deal decks to each player
  deck.forEach((card, idx) => {
    if (idx % 2 === 1) {
      playerPlaying.push(card);
    } else {
      cpuPlaying.push(card);
    }
  });
}

//deals cards from winning hand into playing hand for player
function dealPlayer(deck) {
  deck.forEach((card) => {
    playerPlaying.push(card);
    playerWin.shift()
  });
}

//deals cards from winning hand into playing hand for Cpu
function dealCpu(deck) {
  deck.forEach((card) => {
    cpuPlaying.push(card);
    cpuWin.shift()
  });
}

function checkWinner() {
  if (playerPlaying.length === 0 && playerWin.length === 0) {
    winner = "cpu";
    return
  } else if (cpuPlaying.length === 0 && cpuWin.length === 0) {
    winner = "player";
    return
  } else {
    winner = null;
  }
  if (playerPlaying.length === 0 && playerWin.length !== 0) {
    shuffle(playerWin);
    dealPlayer(playerWin);
  }
  if (cpuPlaying.length === 0 && cpuWin !== 0) {
    shuffle(cpuWin);
    dealCpu(cpuWin);
  }
}

function playGame() {
  init();
  shuffle(starterDeck);
  dealAll(starterDeck);
}
playGame()