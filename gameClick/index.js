var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
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

/* реализация таймера */
var interval = setInterval(function(){
  var time = parseFloat($time.textContent) //parseFloat переведет строку в число
  // console.log('interval',$time.textContent)
  console.log('time:',typeof time)
  if (time <= 0){
    endGame()
  } else {
    $time.textContent = (time - 0.1).toFixed(1)
  }
}, 100)

renderBox()
}

function endGame(){
  var answer = confirm('Игра окончена.Вы хотите продолжить игру?')
  if(answer){
    alert('Можете продолжить')
    $time.textContent = 125
  } else {
    alert('Прощайте :( я был рад вас видеть в моей игре:)')
    $time.textContent = ''
  }


}

// функция для отлавливания кликов в поле игры 
/* если в dataset есть ключ box из(box.setAttribute('data-box','true')),то клик сделан по квадрату,а не пустому полю*/
function handleBoxClick(event){
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
var box = document.createElement('div')//создает новый элемент
var boxSize = getRandom(30,90)//создаю переменную размеров квадрата и кладу ее вместо фиксированных значений ниже
// console.log('boxSize:',boxSize);
var gameSize = $game.getBoundingClientRect()//переменная и функция для измерения размеров поля игры $game
// console.log('gameSize:',gameSize,'gameSize.height:',gameSize.height,'gameSize.width:',gameSize.width) //вывод всех переменных в консоль
var maxTop = gameSize.height - boxSize //переменные случайных позиций вычисляються (высота поля - случайный размер квадрата)
var maxLeft = gameSize.width - boxSize //переменные случайных позиций вычисляються (ширина поля - случайный размер квадрата)

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




/* удалить потом */
var num = 3.6

console.log(Math.random())//выводит случайное число <1
console.log(Math.floor(num))//округляет в меньшую сторону
console.log(Math.ceil(num))//округляет в большую сторону
console.log(Math.PI *2 *10)


