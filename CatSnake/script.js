//создаю div у которого будет класс field или поле игры
let field = document.createElement('div')
// добавляю переменную field ,в которой этот div, в документ
document.body.appendChild(field)
//добавляю созданному в переменной field, div-у класс "field",через свойство classList
field.classList.add('field')

//создаю 100 ячеек в игровом поле field
for (let i = 1; i < 101; i++) {
  //создаю переменную в которую кладу свойство "создать элемент (div)"
  let excel = document.createElement('div')
 //добавляю новые div-ы в поле field
  field.appendChild(excel)
 //вешаю на каждый div переменной excel класс .excel(его свойства в css прописаны)
  excel.classList.add('excel')
  // console.log("i:", excel)
}
 
// создаю переменную allExcel со всеми 100ячейками поля
let allExcel = document.getElementsByClassName('excel')
// console.log(allExcel)
//создаю еще 2 переменные с координатами
let x = 1,
    y = 10;

//цикл добавит в каждую ячейку атрибут координат posX и posY 
for (let a = 0; a < allExcel.length; a++) {
  allExcel[a].setAttribute('posX', x)
  allExcel[a].setAttribute('posY', y)
  x++
  //условие задает правильную нумерацию координат
  if (x > 10) {
    x = 1
    y--
  }
}

//генератор случайных позиций змеи
function generateSnake () {
  let posX = Math.round(Math.random() * (10 - 3) + 3)
  let posY = Math.round(Math.random() * (10 - 1) + 1)
  // console.log("posX:",posX)
  // console.log("posY:",posY)
  return [posX, posY]
 
}

//создание переменной coordinates для функции выше generateSnake(),чтобы переменная принимала результат вычесления
let coordinates = generateSnake()
// coordinates[0] это posX,coordinates[1] это posY
// console.log('coordinates[0]:', coordinates[0])
// console.log('coordinates[1]:', coordinates[1])
//создание тела змеи
let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + 
coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + 
coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + 
coordinates[1] + '"]')]

for (let i = 0; i < snakeBody.length; i++) {
  snakeBody[i].classList.add('snakeBody')
}
  snakeBody[0].classList.add('snakeHead')

// console.log(coordinates)
// console.log(snakeBody)

//создаю мышь
let mouse

function createMouse () {
  //случайные позиции мыши
  function generateMouse () {
    let posX = Math.round(Math.random() * (10 - 3) + 3)
    let posY = Math.round(Math.random() * (10 - 1) + 1)
    return [posX, posY]
  }
  //задание координат мыши
  let mouseCoordinates = generateMouse()
  // console.log('mouseCoordinates:', mouseCoordinates)
  mouse = document.querySelector('[posX = "'+ mouseCoordinates[0] +'"][posY = "' +
  mouseCoordinates[1] + '"]')
  //если мышка попала на те же координаты что и змея,снова запускаю цикл выше
  while(mouse.classList.contains('snakeBody')){
    let mouseCoordinates = generateMouse()
  mouse = document.querySelector('[posX = "'+ mouseCoordinates[0] +'"][posY = "' +
  mouseCoordinates[1] + '"]')
  }

   mouse.classList.add('mouse')
}

//вызываю большую функцию и создаю мышь
createMouse()

let direction = 'right'
let steps = false

//отображение количества очков
let input = document.createElement('input')
document.body.appendChild(input)
input.style.cssText = 'margin: auto;margin-top: 40px;font-size: 20px;display: block'

let score = 0
input.value = 'Количество очков: ' + score

//движение змеи вправо
function move () {
  let snakeCoordinates = [snakeBody[0].getAttribute('posX'),snakeBody[0].getAttribute('posY')]
  snakeBody[0].classList.remove('snakeHead')
  snakeBody[snakeBody.length-1].classList.remove('snakeBody')
  snakeBody.pop();
// что происходит когда змея упираеться в стенку и правила при движении вверх-вниз-вправо-влево
if (direction == 'right') {
  if (snakeCoordinates[0] < 10) {
    snakeBody.unshift(document.querySelector('[posX = "'+ (+snakeCoordinates[0] + 1) +'"][posY = "' +
    snakeCoordinates[1] + '"]'))
  } else {
    snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' +
    snakeCoordinates[1] + '"]'))
  }   
  } else if (direction == 'left') {
  if (snakeCoordinates[0] > 1) {
    snakeBody.unshift(document.querySelector('[posX = "'+ (+snakeCoordinates[0] - 1) +'"][posY = "' +
    snakeCoordinates[1] + '"]'))
  } else {
    snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' +
    snakeCoordinates[1] + '"]'))
  }   
} else if (direction == 'up') {
  if (snakeCoordinates[1] < 10) {
    snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] +'"][posY = "' +
    (+snakeCoordinates[1] + 1) + '"]'))
  } else {
    snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] +'"][posY = "1"]'))
  }   
} else if (direction == 'down') {
  if (snakeCoordinates[1] > 1) {
    snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] +'"][posY = "' +
    (+snakeCoordinates[1] - 1) + '"]'))
  } else {
    snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] +'"][posY = "10"]'))
  }   
}
 
//змея теперь ест мышей 
if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && 
snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')){
  mouse.classList.remove('mouse')
  let a = snakeBody[snakeBody.length - 1].getAttribute('posX')
  let b = snakeBody[snakeBody.length - 1].getAttribute('posY')
  snakeBody.push(document.querySelector('[posX = "'+ a +'"][posY = "'+ b +'"]'))
  createMouse()
  score++
  input.value = 'Количество очков: ' + score
}
 
//правила окончания игры
if (snakeBody[0].classList.contains('snakeBody')) {
  setTimeout(() => {
    alert('Хвост задет:(Конец игры. ' + 'Количество очков: ' + score) 
  }, 600)
  clearInterval(interval)
  snakeBody[0].style.background = 'url(img/game-over.png) center no-repeat'
  snakeBody[0].style.backgroundSize = '120% 120%'
}

  snakeBody[0].classList.add('snakeHead')
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody')
  }

  steps = true
}

//вызов функции и задание скорости движения
let interval = setInterval(move, 400)

//взаимодействие с клавиатурой
window.addEventListener('keydown', function (e) {
  if (steps == true) {
    if (e.keyCode == 37 && direction!= 'right') {
      direction = 'left'
      steps = false
    } else if (e.keyCode == 38 && direction!= 'down') {
      direction = 'up'
      steps = false
    } else if (e.keyCode == 39 && direction!= 'left') {
      direction = 'right'
      steps = false
    } else if (e.keyCode == 40 && direction!= 'up') {
      direction = 'down'
      steps = false
    }
  }
  
})