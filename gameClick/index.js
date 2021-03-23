var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
console.log('$game: ', $game)


$start.addEventListener('click',startGame)

function startGame(){
$start.classList.add('hide')
$game.style.backgroundColor = "#7AF973"

renderBox()
}

function renderBox(){
console.log('from renderBox')
}