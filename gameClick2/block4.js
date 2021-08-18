
// let str = 'Жизнь сложная штука'
// let str2 = 'Жизнь легкая шутка'
// let str3 = 'Название книги "451 градус по Фаренгейту"'
// console.log('str3: ', str3)
// let template = `
// Дни недели:
// Бездельник
// Вторельник
// Бреда
// Ветверг
// Пьятница
//Изменено для git
// `
// console.log('template: ',template)
// let template2 = `Интерполяция ${str2}`
// console.log('template2: ', template2)
// const foo = () => {
//   console.log(666*45)
// }
// let template3 = `Показ тела функции ${foo}`
// console.log('template3 : ', template3 )

// let big = 2245677757876665n
// console.log(typeof big)
// let symbol = Symbol()
// console.log(typeof symbol)
// let obj = {x:7}
// console.log('obj: ',typeof obj)
// let mass = []
// console.log('mass: ',typeof mass)
// let func = function(){}
// console.log('func: ',typeof func)
// let empty = null
// console.log('empty: ',typeof empty)
// let regExp = new RegExp()
// console.log('regExp: ',typeof regExp)
// let error = new Error()
// console.log('error: ',typeof error)
// let data = new Date()
// console.log('data: ',typeof data)
// let map = new Map()
// console.log('map: ',typeof map)
// let set = new Set()
// console.log('set: ',typeof set)


/* пройденная теория */
//простые методы массивов
// const arr = ['Волга','Лада',789,'Сумка','Окошко']
// let str = arr.shift()
// console.log(arr,str)
// arr.unshift('Жизнь')

// console.log(arr)
// arr.push('Привет')
// console.log(arr)
// arr.pop()
// console.log(arr)
// let obj = arr.indexOf('Сумка')
// let kit = arr[obj]
// console.log(kit[3])

/* объекты */
// let mutant = {
//   name:'Логан',
//   year: 1834,
//   ability: 'когти',
//   color: 'yellow',
//   family:['Профессор Икс','Джин Грей','Циклоп'],
//   race: 'Люди Икс',
//   calcAge: function(){
//     console.log('this',this)
//     let now = 2021
//     console.log('this.year',now - this.year)
//   }
// }

// console.log(mutant['name'])
// mutant.power = 'Разрывание'
// console.log('Метод, строка с заглавной буквы:',mutant['color'].charAt(0).toUpperCase() 
// + mutant['color'].substr(1,mutant['color'].length - 1))

// mutant.year = 1666
// console.log(mutant)

// mutant.calcAge()

// for(let i = 0;i < 10;i++){
//   setTimeout(function(){
//     console.log(i)
//   },1000)
// }

// const ring = ['Золото','Серебро']
// const w = {a:2,b:4}

// ring.unshift('Платина')
// w.c = 88
// console.log('ring',ring)
// console.log('w',w)

// function getAge(year){
//   let title = document.createElement('h1')
//   const current = new Date().getFullYear()
  
//   title.textContent = current + ' Год'
//   title.style.color = "#000"
//   title.style.position = "fixed"
//   title.style.top = '30px'
//   title.style.fontWeight = "bold"

//   document.body.insertAdjacentElement('afterbegin',title)

//   return current - year
// }

// console.log(getAge(1995))

// const calculateAge = (year) => {
//   const current = new Date().getFullYear()
//   return current - year
// }

// console.log(calculateAge(2004))

// const takeHour = hour => {
// const current = new Date().getHours()
//  return current + hour
// }

// const getSecond = second => {
//   return new Date().getSeconds() - second
// }

// const getSecond = second => new Date().getSeconds() - second

// const logAge = year => console.log(new Date().getFullYear() - year)

// console.log(getSecond(13))
// console.log(logAge(1970))

// const person = {
//   age: 25,
//   name: 'Max',
//   logNameWithTime:function() {
//     window.setTimeout(() => {
//       console.log(this.name)
//     },1000)
//   }
// }

// person.logNameWithTime()

/* продвинутые методы массивов */
// let str = '1,2,3,4,5,6,7'
// let ar = str.split(' ')
// console.log('ar',ar)
// console.warn(ar.join(''))

// let arrow = [1,2,3,4,5,6,7,8,9,123]

// for(let i = 0;i < arrow.length;i++){
//   if(arrow[i] % 2 === 0){
//     console.log('%',arrow[i])
//     continue
//   }

//   console.log(arrow[i])
// }

// for(let i = 0;i < arrow.length;i++){
//   if(arrow[i] % 2 === 0){
//     console.log('if',arrow[i])
//     break
//   }

//   console.log('log',arrow[i])
// }

let str4 = '1,2,3,4,jack,pets,7,8,9'
let massive = str4.split(',') // сделает массив из строки

massive.splice(3, 3,'666','778')//удаляет,добавляет элементы в массив: 1-ое число-позиция,2-ое-сколько удалить, 3-е и 4-е что добавить
console.log('massive-splice',massive)

let arrays = ['#546E7A','#F4511E','#9673AB7','#9C27B0','#E91E63','#3F51B5','#03A9F4']

let newAr = arrays.concat([3,4])//concat объединяет массив с массивом в скобках
console.log('newAr-concat',newAr)

let objArr = [
  {
     "id": "092C04C4",
        "category": "women",
        "brand": "Eazyway",
        "name": "Тайтсы",
        "cost": 2890,
        "color": [
            "Черный/Черный",
            "Черный/Красный"
        ],
        "sizes": [
            "40/42",
            "42/44",
            "44/46"
        ]
        
},
{name: 'Макс',age: 55},
{name: 'Дима',age: 65},
{name: 'Оксана',age: 35},
999,'Ничего'
]

// метод find находит определенный объект или элемент в массивк 
let founded = objArr.find(function(person){
return person.age === 55
})

console.log('founded',founded)

//filter отфильтровывает массив принимает булевое значение-возращает результат,если true
let filtrArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
 return i < 6
})

console.log('filtrArray: ', filtrArray)

// map перебирает элементы массива и делает с ними любое дейтсвие
let mapArray = [1,2,3,4,5,6,7,8,9].map(function(i){
  console.log('map',i*3)
  return i * 2
})

console.log('mapArray: ', mapArray)

/* перебирает элементы массива и делает с ними любое дейтсвие,принимает 3 аргумента:
element,index,array,при return ничего не вернет */
const forArray = [1,2,3,4,5,6,7,8]
forArray.forEach(function(elem,index,arr){
  console.log('forEach Index:',index,'forEach element:',elem,'forEach array:',arr)
})