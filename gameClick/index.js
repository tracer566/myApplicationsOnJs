const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
const $time = document.querySelector('#time')
const $result = document.querySelector('#result')
const $timeHeader = document.querySelector('#time-header')
const $resultHeader = document.querySelector('#result-header')
const $gameTimeSettings = document.querySelector('#game-time')

/* переменная для подсчета кликов */
let score = 0
let isGameStarted = false //переменная для убирания бага:"продолжение игры,когда кончилось время"

// оживляю кнопку событием
$start.addEventListener('click',startGame)
// отлавливаю клики в поле игры через делегирование
$game.addEventListener('click',handleBoxClick)
$gameTimeSettings.addEventListener('input',setGameTime)

function show($elem){
  $elem.classList.remove('hide')
}

function hide($elem){
  $elem.classList.add('hide')
}

// функция для кнопки: старт игры
function startGame(){
score = 0 //обнуляет счет игры
setGameTime()//выставляет время игры
$gameTimeSettings.setAttribute('disabled','true')//блокирует input настройки времени если игра начата
isGameStarted = true
hide($start)
$game.style.backgroundColor = "#90EE90"

/* реализация таймера */
let interval = setInterval(function(){
  let time = parseFloat($time.textContent) //parseFloat переведет строку в число
  // console.log('interval',$time.textContent)
  // console.log('time:',typeof time)
  if (time <= 0){  //если время подошло к концу очищаеться interval и запускаеться функция endGame()
    clearInterval(interval)
    endGame()
  } else {
    $time.textContent = (time - 0.1).toFixed(1) //иначе textContent уменьшаеться на 0.1сек
  }
}, 100)

renderBox()
}

/* функция устанавливает счет игры */
function setGameScore(){
  $result.textContent = score.toString()
}

/* функция устанавливает значение времени */
function setGameTime(){
  let time = +$gameTimeSettings.value//обязательно перевести value в число иначе не будет работать
  $time.textContent = time.toFixed(1)
  show($timeHeader)
  hide($resultHeader)
}

/* функция срабатывает при окончании игры */
function endGame(){
 isGameStarted = false
 show($start)
 $game.style.background = '#FFFACD'
 $game.innerHTML = ''//очищаю поле от отстатков квадратов
 hide($timeHeader)//прячу время
 show($resultHeader)//вывожу результат
$gameTimeSettings.removeAttribute('disabled')//снимает блок с поля настройки времени,удалением аттрибута

 setGameScore()//вызываю функцию вывода результата
}

// функция для отлавливания кликов в поле игры 
/* если в dataset есть ключ box из(box.setAttribute('data-box','true')),то клик сделан по квадрату,а не пустому полю*/
function handleBoxClick(event){
  /* когда таймер на нуле запрещает генерацию новых квадратов */
  if(!isGameStarted){
    return
  }
  // console.log('event.target:',event.target)
  // console.log('event.target.dataset:',event.target.dataset)
if(event.target.dataset.box){
  // console.log('event.target.dataset.box:',event.target.dataset.box)
  // console.log('клик сделан по квадрату')
  score++
  renderBox() // генерирует новый квадрат
  
}
}

/* функция генерирует квадраты случайнм образом */
function renderBox(){
console.log('getRandom:',getRandom(30,90))//проверка рандомных значений
$game.innerHTML = ""  //1-ое действие функции очищает поле игры,перед генерацией квадрата 
let box = document.createElement('div')//создает новый элемент
let boxSize = getRandom(30,90)//создаю переменную размеров квадрата и кладу ее вместо фиксированных значений ниже
// console.log('boxSize:',boxSize);
let gameSize = $game.getBoundingClientRect()//переменная и функция для измерения размеров поля игры $game
// console.log('gameSize:',gameSize,'gameSize.height:',gameSize.height,'gameSize.width:',gameSize.width) //вывод всех переменных в консоль
let maxTop = gameSize.height - boxSize //переменные случайных позиций вычисляються (высота поля - случайный размер квадрата)
let maxLeft = gameSize.width - boxSize //переменные случайных позиций вычисляються (ширина поля - случайный размер квадрата)

// внешний вид элемента
box.style.height = box.style.width = boxSize + "px"
box.style.position = "absolute"
box.style.backgroundColor = "#000"
box.style.top = getRandom( 0, maxTop ) + "px"
box.style.left = getRandom( 0, maxLeft ) + "px"
box.style.cursor = "pointer"
box.setAttribute('data-box','true')

/* добавляет созданный элемент в поле $game*/
$game.insertAdjacentElement('afterbegin', box)
}

/* случайные размеры квадрата */
function getRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min)
}





