var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

// оживляю кнопку событием
$start.addEventListener('click',startGame)

// функция для кнопки: старт игры
function startGame(){
$start.classList.add('hide')
$game.style.backgroundColor = "#7AF973"

renderBox()
}

function renderBox(){
var box = document.createElement('div')//создает новый элемент

// внешний вид элемента
box.style.height = box.style.width = "50px"
box.style.position = "absolute"
box.style.backgroundColor = "#000"

/* добавляет созданный элемент в поле $game*/
$game.insertAdjacentElement('afterbegin',box)

}


