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

/*----------------------------- Event Listeners -----------------------------*/
document.getElementById("playBtn").addEventListener("click", handleClick);
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
  warWinner = "";

}
console.log("after init ()");
function render() {
  //display the state of game i.e image of cards into correct div

}

function compCards (idx){
  // compare the value of each index between two arrays of objects
  if (playerPlaying[0] > cpuPlaying[0]){
    playerWin.push[playerPlaying[0]]
    playerWin = cpuPlaying.push(card)
  }else if (playerPlaying < cpuPlaying){
    playerWin = playerPlaying.push(card)
    playerWin = cpuPlaying.push(card)
  }else{warStart ()}
}

function warStart(){
  console.log('hi')
}

compCards(playerPlaying, cpuPlaying);

function handleClick() {
  shuffle(starterDeck);
  console.log('success')
  compCards()
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
function dealPlayer(playerWin) {
  shuffle(playerWin);
  playerWin.forEach((card) => {
    playerPlaying.push(card);
  });
}

//deals cards from winning hand into playing hand for Cpu
function dealCpu(cpuWin) {
    shuffle(cpuWin);
    cpuWin.forEach((card) => {
      cpuPlaying.push(card);
    });
  }

let shuffledDeck = shuffle(starterDeck);
dealAll(shuffledDeck);
console.log(playerPlaying);
console.log(cpuPlaying);
