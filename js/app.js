console.log('sanity check')
  
/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let starterDeck, winner, cpuPlaying, cpuWin, playerPlaying, playerWin, warWinner, playerAnte, cpuAnte


/*------------------------ Cached Element References ------------------------*/
let playBtn = document.getElementById('#playBtn')
let replayBtn = document.getElementById('#replayBtn')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init() 

function init() {
   starterDeck ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
    winner = null
    cpuPlaying = []
    cpuWin = []
    playerAnte = []
    playerPlaying = []
    playerWin = []
    platerAnte = []
    warWinner = ''
    
}
function render() {
    
}
function cardComp(cpuPlaying, playerPlaying){
    //compares the arrays of cpu and player to determine which is higher then pushes into winning pile array (helper function to use as my cb for my forEach loops)
    cpuPlaying > playerPlaying ? cpuPlaying.push(cpuWin) : playerPlaying.push(playerWin)
    // no winners yet null is our playing status
    return winner = null
    //if player has no cards in hand or in winning array game over
if(playerPlaying === null && playerWin === null){
    winner = 'CPU'
    // if comp has no cards to play or any in winning hand player wins
}else if (cpuPlaying === null && cpuWin === null)){
    winner = 'PLAYER'
}return winner
}


function handleClick(evt) {
    
}