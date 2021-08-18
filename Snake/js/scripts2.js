//создаю поле
let field = document.createElement('div')
document.body.prepend(field)
field.classList.add('field')

//создаю заголовок и вставляю перед полем
let title = document.createElement('div')
field.before(title)
title.classList.add('title')
title.textContent = 'Супер Змейка'

//создаю ячейки
for(let x = 1; x < 101; x++){
  let excel = document.createElement('div')
  excel.classList.add('excel')
  field.append(excel)
}

//создаю переменную чтобы в нее поместить все ячейки
let excelAll = document.querySelectorAll('.excel')
// let excelAll = document.getElementsByClassName('excel')

/* присваиваю координаты каждой ячейке  */
let x = 1,
    y = 10

for(let i = 0; i < excelAll.length; i++){
  excelAll[i].setAttribute('posX', x)
  excelAll[i].setAttribute('posY', y)
  if(x >= 10){
    x = 0
    y--
  }
  x++
}

/* создание случайных позиций */
function generateSnake(){
  let posX = Math.round(Math.random() * (10 - 3) + 3)//генерирует значения с 3 до 10
  let posY = Math.round(Math.random() * (10 - 1) + 1)

  //массив со случайными координатами
  return [posX,posY]
  
}

let coordinates = generateSnake()
/* забираю случайные координаты змеи в переменную snakeBody,которая будет массивом */
let snakeBody = [document.querySelector('[posX = "'+ coordinates[0] + '"][posY = "'
+ coordinates[1] +'"]'),document.querySelector('[posX = "'+ (coordinates[0] - 1) + '"][posY = "'
+ coordinates[1] +'"]'),document.querySelector('[posX = "'+ (coordinates[0] - 2) + '"][posY = "'
+ coordinates[1] +'"]')]

// console.log('snakeBody: ', snakeBody)
console.log('coordinates',coordinates)

/* перебираю массив и добавляю класс для змеи,создавая ее */
for(let z = 0;z < snakeBody.length; z++){
  snakeBody[z].classList.add('snakeBody')
}

// голова змеи
snakeBody[0].classList.add('snakeHead')

/* создание мыши */
let mouse

function createMouse(){
  function generateMouse(){
  let posX = Math.round(Math.random() * (10 - 1) + 1)//генерирует значения с 1 до 10
  let posY = Math.round(Math.random() * (10 - 1) + 1)

  //массив со случайными координатами
  return [posX,posY]
  
}

let mouseCoordinates = generateMouse()
console.log('mouseCoordinates: ', mouseCoordinates)
mouse = document.querySelector(('[posX = "'+ mouseCoordinates[0] + '"][posY = "'
+ mouseCoordinates[1] +'"]'))

/* убирает баг,если мышь появилась на тех же координатах что и тело змеи */
while(mouse.classList.contains('snakeBody')){
  let mouseCoordinates = generateMouse()
  mouse = document.querySelector(('[posX = "'+ mouseCoordinates[0] + '"][posY = "'
+ mouseCoordinates[1] +'"]'))
}

mouse.classList.add('mouse')

}
//запускаю функцию создания мыши
createMouse()

//переменная для движения мыши
let direction = 'right'
// переменная для убирания бага быстрого нажимания стрелок
let steps = false
let input = document.createElement('input')
document.body.append(input)
input.style.cssText = `
margin:auto;
margin-top:40px;
display:block;
font-size: 20px;

`
// переменная для подсчета очков
let score = 0
input.value = `Съедено мышей: ${score}`

/* движение змейки */
function move(){
  let snakeCoordinates = [snakeBody[0].getAttribute('posX'),snakeBody[0].getAttribute('posY')]
  snakeBody[0].classList.remove('snakeHead')//удаляю голову
  snakeBody[snakeBody.length - 1].classList.remove('snakeBody')//удаляю класс у последнего элемента массива

  snakeBody.pop() //удаляю последний элемент массива

  if(direction === 'right'){
    //условие разрешает змейке заходить за стену и появлять с др.стороны
    if(snakeCoordinates[0] < 10){
      snakeBody.unshift(document.querySelector('[posX = "'+ (+snakeCoordinates[0] + 1) + '"][posY = "'
      + snakeCoordinates[1] +'"]'))
    } else {
      snakeBody.unshift(document.querySelector('[posX = "1"][posY = "'
      + snakeCoordinates[1] +'"]'))
    }
  } else if(direction === 'left'){
    //условие разрешает змейке заходить за стену и появлять с др.стороны
    if(snakeCoordinates[0] > 1){
      snakeBody.unshift(document.querySelector('[posX = "'+ (+snakeCoordinates[0] - 1) + '"][posY = "'
      + snakeCoordinates[1] +'"]'))
    } else {
      snakeBody.unshift(document.querySelector('[posX = "10"][posY = "'
      + snakeCoordinates[1] +'"]'))
    }
  } else if(direction === 'up'){
    //условие разрешает змейке заходить за стену и появлять с др.стороны
    if(snakeCoordinates[1] < 10){
      snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] + '"][posY = "'
      + (+snakeCoordinates[1] + 1) +'"]'))
    } else {
      snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] +'"][posY = "1"]'))
    }
  } else if(direction === 'down'){
    //условие разрешает змейке заходить за стену и появлять с др.стороны
    if(snakeCoordinates[1] > 1){
      snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] + '"][posY = "'
       + (+snakeCoordinates[1] - 1) +'"]'))
    } else {
      snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] +'"][posY = "10"]'))
    }
  }

snakeBody[0].classList.add('snakeHead')

/* змея ест мышей */
if(snakeBody[0].getAttribute('posX') === mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') === mouse.getAttribute('posY')){
  mouse.classList.remove('mouse') //убираю мышь
  let a = snakeBody[snakeBody.length - 1].getAttribute('posX'),
      b = snakeBody[snakeBody.length - 1].getAttribute('posY')
  snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'))
  createMouse()
  // подсчет очков
  score++
  input.value = `Съедено мышей: ${score}`

}
/* змея ест мышей */

/* окончание игры */
if(snakeBody[0].classList.contains('snakeBody')){
    snakeBody[0].style.background = "url('../Snake/img/scream.jpg') center center /cover no-repeat"
    setTimeout(() => {
      let x = confirm(`Конец игры.Cъедено мышей: ${score} жертвы.Желаете начать новую игру?
      `)
      if(x){
        location.reload()
      } else {
        alert('До свидания,друг:)')
      }
    },2000)
    
    clearInterval(interval)
}

/* перебираю массив и добавляю класс для змеи,создавая ее */
for(let z = 0;z < snakeBody.length; z++){
  snakeBody[z].classList.add('snakeBody')
}

steps = true

}

let interval = setInterval(move,300)

/* управление с клавиатуры */
window.addEventListener('keydown',function(e){
  console.log(e)
  e.preventDefault() //запрещаю прокрутку страницы стрелками
  /* && direction != 'right',запрещает резко поворачивать змею на 180deg */
  if(steps === true){
    if(e.keyCode == 37 && direction != 'right'){
      direction = 'left'
      steps = false
    }
    else if(e.keyCode == 38 && direction != 'down'){
      direction = 'up'
      steps = false
    }

    else if(e.keyCode == 39 && direction != 'left'){
      direction = 'right'
      steps = false
    }

    else if(e.keyCode == 40 && direction != 'up'){
      direction = 'down'
      steps = false
    }

    if(e.keyCode === 27){
      return alert('Пауза игры')
    }
  }

})