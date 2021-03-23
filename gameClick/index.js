var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
/* переменная для подсчета кликов */
var score = 0

// оживляю кнопку событием
$start.addEventListener('click',startGame)
// отлавливаю клики в поле игры через делегирование
$game.addEventListener('click',handleBoxClick)

// функция для кнопки: старт игры
function startGame(){
$start.classList.add('hide')
$game.style.backgroundColor = "#7AF973"

renderBox()
}

// функция для отлавливания кликов в поле игры 
/* если в dataset есть ключ box из(box.setAttribute('data-box','true')),то клик сделан по квадрату,а не пустому полю*/
function handleBoxClick(event){
if(event.target.dataset.box){
  // console.log(event.target.dataset)
  console.log('клик сделан по квадрату')
  score++
  renderBox() // генерирует новый квадрат
  
}
}

function renderBox(){
$game.innerHTML = ""  //1-ое действие функции очищает поле игры,перед генерацией квадрата 
var box = document.createElement('div')//создает новый элемент

// внешний вид элемента
box.style.height = box.style.width = "50px"
box.style.position = "absolute"
box.style.backgroundColor = "#000"
box.style.top = "60px"
box.style.left = "20px"
box.style.cursor = "pointer"
box.setAttribute('data-box','true')

/* добавляет созданный элемент в поле $game*/
$game.insertAdjacentElement('afterbegin', box)

}


