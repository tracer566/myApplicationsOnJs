const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
let speed = 0
let isGameStarted = false

modal.addEventListener('click',(e) => {
  let ev = e.target.classList
  if(ev.contains('easy')){
    speed = 800
    startGame(speed)
  } else if (ev.contains('normal')){
    speed = 500
    startGame(speed)
  } else if (ev.contains('hard')){
    speed = 150
    startGame(speed)
  }

  if(ev.contains('button')){
    modal.classList.add('hide')
    overlay.classList.add('hide')
    isGameStarted = true
    startGame(speed)

  }

})

let startGame = (speed) => {
  // body
if(!isGameStarted){
  return
}

if(speed >= 800){
  document.body.classList.add('easy')
} else if (speed >= 500) {
  document.body.classList.add('normal')
} else if (speed >= 150) {
  document.body.classList.add('hard')
  document.querySelector('.main').style.opacity = "0.7"
  document.querySelector('input').style.background = "orange"
}

debugger

 /* 4-й урок */
 let tetris = document.createElement('div')
 let main = document.querySelector('.main')
 let title = document.createElement('h1')
 title.classList.add('title')
 title.textContent = 'Тетрис на javascript'
 if(speed < 300){
   title.textContent = 'Адский Тетрис на javascript'
 }
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

let mainArr=[[[0,1],[0,2],[0,3],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]]],[[1,0],[0,1],[1,1],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]],[[1,0],[0,1],[0,2],[[0,0],[-1,1],[1,0],[2,-1]],[[1,-1],[1,-1],[-1,0],[-1,0]],[[-1,0],[0,-1],[2,-2],[1,-1]],[[0,-1],[0,-1],[-2,0],[-2,0]]],[[1,0],[1,1],[1,2],[[0,0],[0,0],[1,-1],[-1,-1]],[[0,-1],[-1,0],[-2,1],[1,0]],[[2,0],[0,0],[1,-1],[1,-1]],[[-2,0],[1,-1],[0,0],[-1,1]]],[[1,0],[-1,1],[0,1],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]]],[[1,0],[1,1],[2,1],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]]],[[1,0],[2,0],[1,1],[[1,-1],[0,0],[0,0],[0,0]],[[0,0],[-1,0],[-1,0],[1,-1]],[[1,-1],[1,-1],[1,-1],[0,0]],[[-2,0],[0,-1],[0,-1],[-1,-1]]]];

/* демонстрация работы массива mainArr */
// console.log('mainArr',mainArr[0][0][0])

/* переменнные вынесы чтобы можно было использовать в др.частях кода */
let currentFigure = 0
let figureBody = 0
let rotate = 1

function createFigure() {
  function getRandom() {
    return Math.round(Math.random() * (mainArr.length - 1))
  }

  rotate = 1

  currentFigure = getRandom()
  // console.log('currentFigure: ', currentFigure,'mainArr.length:',mainArr.length)

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
let score = 0
let input = document.querySelector('input')
input.value = `
Набрано очков: ${score}
`

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
}

/* условие падения фигуры,когда упадет срабатывает вторая часть условия */
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
  /* проверка заполнения ряда */
  for(let i = 1;i < 15;i++){
    let count = 0
    for(let k = 1;k < 11;k++){
      if(document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')){
        count++
        if(count === 10){
          /* отображает и перезаписывает очки */
          score+=10
          input.value = `
            Набрано очков: ${score}
            `
          for(let m = 1;m < 11;m++){
            document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set')
            
          }
          /* понижение ряда при заполнении x координаты */
          let set = document.querySelectorAll('.set')
          let newSet = []
          for(let s = 0;s < set.length;s++){
            let setCoordinates = [set[s].getAttribute('posX'),set[s].getAttribute('posY')];
            if(setCoordinates[1] > i){
              set[s].classList.remove('set')
              newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1] - 1}"]`))
            }

          }

          for(let a = 0;a < newSet.length;a++){
            newSet[a].classList.add('set')
          }
          i--
        }

      }

    }
  }
  /* правила окончания игры */
  for(let n = 1;n < 11;n++){
    if(document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')){
      clearInterval(interval)
      alert(`Игра окончена.Набрано очков: ${score}`)
      location.reload()
      break
    }
  }

  createFigure()
}

}

let interval = setInterval(() => {
  move()
},speed)

let flag = true //вспомогательная переменная для проверки условий

/* управление с клавиатуры */
window.addEventListener('keydown',(e) => {
  e.preventDefault()

  let coordinates1 = [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')]
  let coordinates2 = [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')]
  let coordinates3 = [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')]
  let coordinates4 = [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')]
  
  let getNewState = a => {

    flag = true
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
  else if (e.keyCode == 38){
    flag = true
    /* новые координаты для фигуры */
    let figureNew = [
      document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0] }"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1] }"]`),
      document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0] }"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1] }"]`),
      document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0] }"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1] }"]`),
      document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0] }"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1] }"]`),
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

    /* без этого условия ячейки будут разлетаться при повороте */
    if(rotate < 4){
      rotate++
    } else {
      rotate = 1
    }

    }
  } else if (e.keyCode == 27){
    alert('Пауза игры')
  }

  // getNewState()
  // console.log(e)

})

} 
/* startGame */