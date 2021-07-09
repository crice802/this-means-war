/*-------------------------------- Constants --------------------------------*/
const starterDeck = [
  "dA",
  "dQ",
  "dK",
  "dJ",
  "d10",
  "d09",
  "d08",
  "d07",
  "d06",
  "d05",
  "d04",
  "d03",
  "d02",
  "hA",
  "hQ",
  "hK",
  "hJ",
  "h10",
  "h09",
  "h08",
  "h07",
  "h06",
  "h05",
  "h04",
  "h03",
  "h02",
  "cA",
  "cQ",
  "cK",
  "cJ",
  "c10",
  "c09",
  "c08",
  "c07",
  "c06",
  "c05",
  "c04",
  "c03",
  "c02",
  "sA",
  "sQ",
  "sK",
  "sJ",
  "s10",
  "s09",
  "s08",
  "s07",
  "s06",
  "s05",
  "s04",
  "s03",
  "s02",
];
/*---------------------------- Variables (state) ----------------------------*/
let winner,
  cpuPlaying,
  cpuWin,
  playerPlaying,
  playerWin,
  playerAnte,
  cpuAnte,
  playerPrevCard,
  cpuPrevCard,
  pCardRemove,
  cCardRemove;
/*------------------------ Cached Element References ------------------------*/
let playBtn = document.getElementById("#playBtn");
let replayBtn = document.getElementById("#replayBtn");
let playerCompCard = document.getElementById("playerCompCard");
let cpuCompCard = document.getElementById("cpuCompCard");
let playerDeck = document.getElementById("playerDeck");
let playerWinDeck = document.getElementById("playerWinDeck");
let playerAnte1 = document.getElementById("playerAnte1");
let playerAnte2 = document.getElementById("playerAnte2");
let playerAnte3 = document.getElementById("playerAnte3");
let cpuDeck = document.getElementById("cpuDeck");
let cpuWinDeck = document.getElementById("cpuWinDeck");
let cpuAnte1 = document.getElementById("cpuAnte1");
let cpuAnte2 = document.getElementById("cpuAnte2");
let cpuAnte3 = document.getElementById("cpuAnte3");
let displayMsg = document.getElementById("displayMsg");
console.log()
/*----------------------------- Event Listeners -----------------------------*/
document.getElementById("playBtn").addEventListener("click", playGame);
document.getElementById("replayBtn").addEventListener("click", reset);
/*-------------------------------- Functions --------------------------------*/
init();

function lookupValue(card) {
  if (card === "dA" || card === "cA" || card === "sA" || card === "hA") {
    return 14;
  }
  if (card === "dK" || card === "cK" || card === "sK" || card === "hK") {
    return 13;
  }
  if (card === "dQ" || card === "cQ" || card === "sQ" || card === "hQ") {
    return 12;
  }
  if (card === "dJ" || card === "cJ" || card === "sJ" || card === "hJ") {
    return 11;
  }
  if (card === "d10" || card === "c10" || card === "s10" || card === "h10") {
    return 10;
  }
  if (card === "d09" || card === "c09" || card === "s09" || card === "h09") {
    return 9;
  }
  if (card === "d08" || card === "c08" || card === "s08" || card === "h08") {
    return 8;
  }
  if (card === "d07" || card === "c07" || card === "s07" || card === "h07") {
    return 7;
  }
  if (card === "d06" || card === "c06" || card === "s06" || card === "h06") {
    return 6;
  }
  if (card === "d05" || card === "c05" || card === "s05" || card === "h05") {
    return 5;
  }
  if (card === "d04" || card === "c04" || card === "s04" || card === "h04") {
    return 4;
  }
  if (card === "d03" || card === "c03" || card === "s03" || card === "h03") {
    return 3;
  }
  if (card === "d02" || card === "c02" || card === "s02" || card === "h02") {
    return 2;
  }
}

function init() {
  winner = null;
  cpuPlaying = [];
  cpuWin = [];
  playerAnte = [];
  playerPlaying = [];
  playerWin = [];
  playerAnte = [];
  playerPrevCard = [];
  cpuPrevCard = [];
  cpuAnte = [];
  shuffle(starterDeck);
  dealAll(starterDeck);
  
}

function render() {
  //display the state of game i.e image of cards into correct div
  playerCompCard.classList.remove(pCardRemove);
  cpuCompCard.classList.remove(cCardRemove);
  let pClassAdd = playerPlaying[0];
  let cClassAdd = cpuPlaying[0];
  pCardRemove = playerPlaying[0];
  cCardRemove = cpuPlaying[0];
  if (playerPlaying.length > 1) {
    playerCompCard.classList.remove("outline", "back");
    cpuCompCard.classList.remove("outline", "back");
  }
  // displayMsg.innerText = "hi"
  if (playerWin.length > 1) {
    playerWinDeck.classList.add("back");
    playerWinDeck.classList.remove("outline");
  }
  if (cpuWin.length > 1) {
    cpuWinDeck.classList.add("back");
    cpuWinDeck.classList.remove("outline");
  }
  if (playerPlaying.length > 1) {
    playerDeck.classList.add("back");
    playerDeck.classList.remove("outline");
  }
  if (cpuPlaying.length > 1) {
    cpuDeck.classList.add("back");
    cpuDeck.classList.remove("outline");
  }
  //add class to cards
  //display cards to div
  playerCompCard.classList.add(pClassAdd);
  cpuCompCard.classList.add(cClassAdd);
}
//after user interacts progress or time out
//run card comp
function compCards() {
  // compare the value of top index  between two arrays
  //need to add shift between each push
  let playerCard = lookupValue(playerPlaying[0]);
  let cpuCard = lookupValue(cpuPlaying[0]);
  if (playerCard > cpuCard) {
    //pushing playing cards into player win arr
    playerWin.push(playerPlaying[0]);
    playerPlaying.shift();
    playerWin.push(cpuPlaying[0]);
    cpuPlaying.shift();
    displayMsg.innerText = 'Player you won this hand'
    // pushing playing arr into cpu winning arrs and removing cards after
  } else if (playerCard < cpuCard) {
    cpuWin.push(playerPlaying[0]);
    playerPlaying.shift();
    cpuWin.push(cpuPlaying[0]);
    cpuPlaying.shift();
    displayMsg.innerText = 'Grrrr Cpu won this hand'
  }
  if (playerCard === cpuCard) {
    warStart();
  }
}

function warStart() {
  playerAnte.push(playerPlaying[1]);
  playerPlaying.shift();
  playerAnte.push(playerPlaying[1]);
  playerPlaying.shift();
  playerAnte.push(playerPlaying[1]);
  playerPlaying.shift();
  cpuAnte.push(cpuPlaying[1]);
  cpuPlaying.shift();
  cpuAnte.push(cpuPlaying[1]);
  cpuPlaying.shift();
  cpuAnte.push(cpuPlaying[1]);
  cpuPlaying.shift();
  // need to update the compare card after pushing 3 cards into array
  // compCards();
  renderWar();
}

function renderWar() {
  playerAnte1.classList.remove("outline");
  playerAnte1.classList.add(playerAnte[0]);
  playerAnte2.classList.remove("outline");
  playerAnte2.classList.add(playerAnte[1]);
  playerAnte3.classList.remove("outline");
  playerAnte3.classList.add(playerAnte[2]);
  cpuAnte1.classList.remove("outline");
  cpuAnte1.classList.add(cpuAnte[0]);
  cpuAnte2.classList.remove("outline");
  cpuAnte2.classList.add(cpuAnte[1]);
  cpuAnte3.classList.remove("outline");
  cpuAnte3.classList.add(cpuAnte[2]);
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
    playerWin.shift();
  });
}
//deals cards from winning hand into playing hand for Cpu
function dealCpu(deck) {
  deck.forEach((card) => {
    cpuPlaying.push(card);
    cpuWin.shift();
  });
}
function checkWinner() {
  if (playerPlaying.length === 0 && playerWin.length === 0) {
    winner = "cpu";
    displayMsg.innerText = 'Too bad the Cpu won this war!'
    return;
  } else if (cpuPlaying.length === 0 && cpuWin.length === 0) {
    winner = "player";
    displayMsg.innerText = 'Congratz player you won!'
    return;
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
  render();
  compCards();
  checkWinner();
}
function reset (){
  window.location.reload()
}
