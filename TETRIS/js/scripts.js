 /* первые 2 урока */
 let tetris = document.createElement('div')
 let main = document.querySelector('.main')
 let title = document.createElement('h1')
 title.classList.add('title')
 title.textContent = 'Тетрис на javascript'
 main.before(title)
 tetris.classList.add('tetris')//создаю поле тетриса

/* создаю ячейкм */
 for(let i = 1; i < 181; i++){
   let excel = document.createElement('div')
   excel.classList.add('excel')
   tetris.append(excel)
 }

 /* добавляю в поле main поле тетриса которое больше */
main.append(tetris)

/* добавляю координаты ячейкам */
let excelAll = document.querySelectorAll('.excel')
let i = 0

for(let y = 18; y > 0; y--){
  for(let x = 1;x < 11; x++){
    excelAll[i].setAttribute('posX',x)
    excelAll[i].setAttribute('posY',y)
    i++
  }
}

/* создание фигур */

let x = 5
let y = 15

let mainArr = [
// палка
  [
    [0,1],
    [0,2],
    [0,3]
  ],
// квадрат
  [
    [1,0],
    [0,1],
    [1,1]

  ],
//буква L
  [
    [1,0],
    [0,1],
    [0,2]
  ],
  //буква L обратная
  [
    [1,0],
    [1,1],
    [1,2]
  ],
  //зигзаг нижний ряд вправо
  [
    [1,0],
    [-1,1],
    [0,1]
  ],
  //зигзаг нижний ряд влево
  [
    [1,0],
    [1,1],
    [2,1]
  ],
  //втулка 
  [
    [1,0],
    [2,0],
    [1,1]

  ]



]

/* демонстрация работы массива mainArr */
// console.log('mainArr',mainArr[0][0][0])

let currentFigure = 0
let figureBody = 0

function createFigure() {
  function getRandom() {
    return Math.round(Math.random() * (mainArr.length - 1))
  }

  currentFigure = getRandom()
  console.log('currentFigure: ', currentFigure,'mainArr.length:',mainArr.length)

  /* задаю случайные координаты и получаю случайную фигуру, составляя массив */
  figureBody = [
    document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY= "${y + mainArr[currentFigure][0][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY= "${y + mainArr[currentFigure][1][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY= "${y + mainArr[currentFigure][2][1]}"]`)

  ]

  /* вешаю на массив figureBody визуальное отображение фигуры */
  for(let i = 0;i < figureBody.length;i++){
    figureBody[i].classList.add('figure')
  }

}

createFigure() //если не вызвать эту функцию до move,то на 123 строке будет ошибка с атрибутами

/* падение фигурок */
function move() {
  let moveFlag = true//вспомогательная переменная для проверки условий

  /* получаю координаты готовой фигуры */
 
 let coordinates = [
    [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')],
    [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')],
    [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')],
    [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')]
  ]

  /* условие остановки фигур,перебираю массив coordinates и проверяю его координаты через условие */
  for(let i = 0; i < coordinates.length; i++){

    if(coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1}"]`).classList.contains('set')){
      moveFlag = false
      break
    }

    // console.log('coordinates[i][0]:',coordinates[i][0],'coordinates[i][1]:',coordinates[i][1])

    // console.log('lkfkfk',document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]}"]`)) //возращает null
  
  // console.log('Демонстрация конструкции:',document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1]}"]`)) // та же конструкция возвращает ячейку с координатами как и должно быть

}

if(moveFlag){
  for(let i = 0;i < figureBody.length;i++){
    figureBody[i].classList.remove('figure')
  }

  figureBody = [
    document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] - 1}"]`),
    document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] - 1}"]`),
    document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] - 1}"]`),
    document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] - 1}"]`)
  ]

  for(let i = 0;i < figureBody.length;i++){
    figureBody[i].classList.add('figure')
  }
} else {
  for(let i = 0;i < figureBody.length;i++){
    figureBody[i].classList.remove('figure')
    figureBody[i].classList.add('set')
  }
  createFigure()
}

}
let interval = setInterval(() => {
  move()
},1000)

let flag = true //вспомогательная переменная для проверки условий

/* управление с клавиатуры */
window.addEventListener('keydown',(e) => {
  
  flag = true

  let coordinates1 = [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')]
  let coordinates2 = [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')]
  let coordinates3 = [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')]
  let coordinates4 = [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')]
  
  let getNewState = a => {

    /* новые координаты для фигуры */
    let figureNew = [
      document.querySelector(`[posX = "${+coordinates1[0] + a }"][posY = "${coordinates1[1]}"]`),
      document.querySelector(`[posX = "${+coordinates2[0] + a }"][posY = "${coordinates2[1]}"]`),
      document.querySelector(`[posX = "${+coordinates3[0] + a }"][posY = "${coordinates3[1]}"]`),
      document.querySelector(`[posX = "${+coordinates4[0] + a }"][posY = "${coordinates4[1]}"]`),
    ]

    for(let i = 0;i < figureNew.length;i++){
      if(!figureNew[i] || figureNew[i].classList.contains('set')){
        flag = false
      }
    }

    if(flag == true){
      /* удаляю класс и фигуры */
    for(let i = 0;i < figureBody.length;i++){
      figureBody[i].classList.remove('figure')
    }

    // перезаписываю фигуру с новыми координатами после нажатия клавиши
    figureBody = figureNew

    /* добавляю старый класс для фигуры с новыми координатами */
    for(let i = 0;i < figureBody.length;i++){
      figureBody[i].classList.add('figure')
    }

    }

  }

  if(e.keyCode == 37){
    getNewState(-1)
  } 
  else if (e.keyCode == 39){
    getNewState(1)
  } 
  else if (e.keyCode == 40){
    move()
  }


  // getNewState()

})


