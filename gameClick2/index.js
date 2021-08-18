const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
const $time = document.querySelector('#time')
const $result = document.querySelector('#result')
const $timeHeader = document.querySelector('#time-header')
const $resultHeader = document.querySelector('#result-header')
const $gameTime = document.querySelector('#game-time')
const colors = ['#546E7A','#F4511E','#9673AB7','#9C27B0','#E91E63','#3F51B5','#03A9F4','#00BCD4','#009688','#4CAF50','#4CAF50','#8BC34A','#FFEB3B','#FFC107','#FF5722','#607D8B']

let score = 0 //счетчик очков
let isGameStarted = false //для бага,когда после окончания игры идут клики на квадрат
 
$start.addEventListener('click',startGame)
$game.addEventListener('click', boxClick)
$gameTime.addEventListener('input',setGameTime)

function show($elem){   
  $elem.classList.remove('hide')  
}

function hide($elem){
  $elem.classList.add('hide')
}

function startGame(){
  score = 0
  isGameStarted = true 
  setGameTime()
  hide($start)
  $game.style.backgroundColor = "#fff"
  $gameTime.setAttribute('disabled','true')
  // $time.textContent = $gameTime.value

let interval = setInterval(() => {
  let time = parseFloat($time.textContent)
  if(time <= 0){
    clearInterval(interval)
    endGame()
  } else {
    $time.textContent = (time - 0.1).toFixed(1)
  }
},100)

// смена фона
let i = 0
let changeBG = setInterval(() => {
  document.body.style.background = colors[i]
  i++
  if(i === colors.length || isGameStarted == !true){
    i = 0
    clearInterval(changeBG)
  }
},1000)
//смена фона

  renderBox()
}

console.log('document.body',document.body)

//выводит результат после окончания игры
function setGameScore(){
  $result.textContent = score.toString()
}

// настройка времени игры
function setGameTime(){
  let time = parseFloat($gameTime.value)
  $time.textContent = time.toFixed(1)
  console.log('time',typeof time)
  show($timeHeader)
  hide($resultHeader)
}

function endGame(){
  isGameStarted = false
  show($start)
  $game.style.backgroundColor = "#FFFACD"
  $game.innerHTML = ''
  hide($timeHeader)
  show($resultHeader)
  setGameScore() 
  $gameTime.removeAttribute('disabled')
}

function boxClick(event){
  if(!isGameStarted){   
   return//запрещает игру если !isGameStarted не true
  }
  
   if(event.target.dataset.clickbox){
    renderBox()
    score++
  }
}



function renderBox(){
 $game.innerHTML = '' 
 let box = document.createElement('div')

 let boxSize = getRandomSize(30,100)
 console.log('boxSize',boxSize)
 let gameSize = $game.getBoundingClientRect()//вычисляет ширину и высоту поля $game
 let maxTop = gameSize.height - boxSize
 let maxLeft = gameSize.width - boxSize
 console.log('maxTop',maxTop)
 console.log('maxLeft',maxLeft)

 box.style.height = box.style.width = boxSize + 'px'
 box.style.position = 'absolute'
 box.style.backgroundColor = 'blue'
 box.style.top = getRandomSize(0,maxTop) + "px"
 box.style.left = getRandomSize(0,maxLeft) + "px"
 box.style.cursor = "pointer"
 box.style.backgroundColor = colors[getRandomSize(0,colors.length)]
 box.style.boxShadow = "0px 0px 2px black"
 box.setAttribute('data-clickBox','true')

 $game.insertAdjacentElement('afterbegin',box)

}

function getRandomSize(min,max){
  return Math.floor(Math.random() * (max-min) + min) 
}

