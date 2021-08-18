/*создаю поле и добавляю заголовок полю*/
let title = document.createElement('h1')
let field = document.createElement('div')
title.textContent = "Змейка на javascript"
document.body.prepend(title)
document.body.append(field)
field.classList.add('field')

/*создаю ячейки в поле*/
for(let x = 1;x < 101;x++){
	let excel = document.createElement('div')
	excel.classList.add('excel')
	field.append(excel)
}

/*присваиваю координаты каждой ячейке отсчет идет с x = 1,y=10*/
let excelAll = document.getElementsByClassName('excel')
let x = 1,
		y = 10

for(let i = 0;i < excelAll.length;i++){
	if(x > 10){
		x = 1
		y--
	}
	excelAll[i].setAttribute('posX',x)
	excelAll[i].setAttribute('posY',y)
	x++
}

// let num = 5.66
// console.log(Math.random())
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// let posX = Math.round(Math.random() * (10 - 1) + 1)
// console.log('posX',posX)

/*случайные позиции змеи*/
function generateSnake(){
	let posX = Math.round(Math.random() * (10 - 3) + 3)
	let posY = Math.round(Math.random() * (10 - 1) + 1)
	return [posX,posY]
}

let coordinates = generateSnake()
console.log('Snakecoordinates',coordinates)
console.log('coordinatesX',coordinates[0])
console.log('coordinatesY',coordinates[1])

/*создаю тело змеи*/
let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "'
 + coordinates[1] + '"]'),document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "'
 + coordinates[1] + '"]'),document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "'
 + coordinates[1] + '"]')]
 // добавляю класс для картинки тела змеи
 for(let i = 0;i < snakeBody.length;i++){
 	snakeBody[i].classList.add('snakeBody')
 }
/*добавляю класс головы змеи в 1-й элемент массива snakeBody*/
 snakeBody[0].classList.add('snakeHead')

console.log('snakeBody',snakeBody)

/*создаю случайные позиции для мыши*/
let mouse

function createMouse(){
	function generateMouse(){
	let posX = Math.round(Math.random() * (10 - 3) + 3)
	let posY = Math.round(Math.random() * (10 - 1) + 1)
	return [posX,posY]
	}

let mouseCoordinates = generateMouse()
console.log('mouseCoordinates',mouseCoordinates)
mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]')

/*если мышь появилась на тех же позициях что и змея*/
while(mouse.classList.contains('snakeBody')){
	let mouseCoordinates = generateMouse()
	mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]')
}
// добавляю картинку для мыши
mouse.classList.add('mouse')
}

/*вызываю функцию и создаю мышь*/
createMouse()

/*движение змеи*/
function move() {
	let snakeMoveCoordinates = [snakeBody[0].getAttribute('posX'),snakeBody[0].getAttribute('posY')]
	snakeBody[0].classList.remove('snakeHead')
	snakeBody[snakeBody.length - 1].classList.remove('snakeBody')
	snakeBody.pop()

/*условие нужно чтобы змейка при упоре в стену возращалась с другой стороны*/
if(snakeMoveCoordinates[0] < 10){
	snakeBody.unshift(document.querySelector('[posX = "'+ (+snakeMoveCoordinates[0] + 1) +'"][posY = "'+ 
		snakeMoveCoordinates[1] +'"]'))
} else {
	snakeBody.unshift(document.querySelector('[posX = "1"][posY = "'+ 
		snakeMoveCoordinates[1] +'"]'))
}

snakeBody[0].classList.add('snakeHead')

for(let i = 0;i < snakeBody.length;i++){
 	snakeBody[i].classList.add('snakeBody')
 }
}

/*функция проигрывает функцию движения змеи,засчет нее идет движение*/
// let interval = setInterval(move,900)
// move()