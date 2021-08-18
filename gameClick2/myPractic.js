const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
let $time = document.querySelector('#time')
const $timeHeader = document.querySelector('#time-header')
const $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
const colors = ['#546E7A','#F4511E','#9673AB7','#9C27B0','#E91E63','#3F51B5','#03A9F4','#00BCD4','#009688','#4CAF50','#4CAF50','#8BC34A','#FFEB3B','#FFC107','#FF5722','#607D8B']
let score = 0
let gameStart = false //переменная окончания игры
const $gameTime = document.querySelector('#game-time')

$start.addEventListener('click',startGame)
$game.addEventListener('click',clickBox)
$gameTime.addEventListener('input',changeTime)

function show($elem){
  $elem.classList.remove('hide')
}

function hide($elem){
  $elem.classList.add('hide')
}

// старт игры
function startGame(){
  let instruction = confirm('Скликайте все квадраты в поле игры.Готовы начать?')
  if(instruction){
    score = 0
    gameStart = true
    changeTime()
    hide($start) //скрытие кнопки
    show($timeHeader)//показ таймера
    hide($resultHeader)//скрытие результата
    $game.style.backgroundColor = '#ffff'
/* счетчик игры */
  let timer = setInterval(() => {
    let timeText = parseFloat($time.textContent)
    if(timeText <= 0){
      endGame()
      clearInterval(timer)
    } else {
       $time.textContent = (timeText - 0.1).toFixed(1)
    }
    
  },100)
  /* счетчик игры */
  renderBox()
  $gameTime.setAttribute('disabled','true')
  } else {
    gameStart = false
    show($timeHeader)//показ таймера
    hide($resultHeader)//скрытие результата
    $game.style.backgroundColor = '#FFFACD'
    alert(('До свидания,друг:)').toUpperCase())
  }
}

// конец игры
function endGame(){
  $game.innerHTML = ''//очищение поля
  document.body.style.background = "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)"
  hide($timeHeader)//скрытие таймера
  show($resultHeader)//показ результата
  show($start)
  $game.style.backgroundColor = "#FFFACD"
  // вывод результата счетчика
  $result.textContent = score
  gameStart = false 
  
  $gameTime.removeAttribute('disabled')
}

//сменить время
function changeTime(){
  let time = +$gameTime.value
  $time.textContent = time //возвращаю время к исходному значение
  show($timeHeader)//показ таймера
  hide($resultHeader)//скрытие результата
}

//клики по квадратам
function clickBox(event){
  if(!gameStart){
    return console.log('Игра не начата или окончена')
  }
  let ev = event.target
  if(ev.dataset.click){
    score++
    renderBox()
    changeBG()
    console.log('Клик по квадрату успешен')
  }
 

}

//смена фона
function changeBG(){
  document.body.style.background = colors[getRandom(0,colors.length)]
}

//генерация квадратов
function renderBox(){
  $game.innerHTML = ''

  let box = document.createElement('div')
  let boxSize = getRandom(20,40)
  let gameSizes = $game.getBoundingClientRect()
  let maxTop = gameSizes['height'] - boxSize
  let maxLeft = gameSizes['width'] - boxSize
  
  console.log('boxSize:', boxSize)
  console.log('gameSizes: ', gameSizes)
  
  box.style.width = box.style.height = boxSize + 'px'
  box.style.backgroundColor = 'green'
  box.style.position = 'absolute'
  box.style.top = getRandom(0,maxTop) + "px"
  box.style.left = getRandom(0,maxLeft) + "px"
  box.style.cursor = 'pointer'
  box.style.backgroundColor = colors[getRandom(0,colors.length)]
  box.style.boxShadow = '0px 0px 2px #000'
  box.setAttribute('title','Кликни по квадрату')
  box.setAttribute('data-click','true')

  $game.insertAdjacentElement('afterbegin',box)

}

function getRandom(min,max){
  return Math.floor(Math.random() * (max-min) + min)
}


// мои часики
function time(){
  let nowTime = document.querySelector('#spanTime')
  nowTime.textContent = new Date().getHours() + 
  ': ' + new Date().getMinutes() + ': ' + new Date().getSeconds()
  nowTime.style.marginLeft = '5px'
  nowTime.style.backgroundColor = 'black'
  nowTime.style.color = "#fff"
  nowTime.style.padding = "1px 7px"

}

setInterval(time,1000)
// мои часики

