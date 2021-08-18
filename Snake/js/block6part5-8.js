let past = "1,2,3,4,5,6,7,8,9"

let now = past.split(',')
console.log(now.join(','))
console.log(now.join(' '))
console.log(now.reverse())

let past2 = "1,2,3,4,5,6,7,8,9"
let now2 = past2.split(',')
now2.splice(1,5,)
console.log('now2: ', now2)

let past3 = "1,2,3,4,5,6,7,8,9"
let now3 = past2.split(',')
let newArr = now3.concat(now3)
let newArr2 = now3.concat([99,888])
console.log('newArr : ', newArr )
console.log('newArr2: ', newArr2)

let future = [
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
        ],
        "photo": "MP002XW060O4_13625731_1_v1.jpg",
        "preview": "MP002XW060O4_13625731_1_v2.jpg"
    },
    {
        "id": "CD32D6F8",
        "category": "women",
        "brand": "New Balance",
        "name": "Леггинсы NB Essentials Botanical Legging",
        "cost": 2999,
        "sizes": [
            "40/42",
            "42/44",
            "44/46",
            "46/48",
            "48/50"
        ],
        "photo": "NE007EWMSTP9_14530060_1_v1.jpg",
        "preview": "NE007EWMSTP9_14530060_1_v2.jpg"
    }

  ]
/* все эти методы перебирают каждый элемент массива и помещают там где event */

let x = future.find( (i) => { 
  // console.log('find param: ',i)
  return i.cost == 2999
})

// console.log('find result: ',x)//возращает или элемент массива или undefined

let y = future.filter((w) => {
  // console.log('filter param: ',w)
})

// console.log('filter result: ', y)//возращает какой то массив

let mass = [1,2,3,4,5,6,7,8,9]
let maps = mass.map(function(z){
  // console.log('z',z)
  return z * 2
})

// console.log('maps: ', maps)//возращает какой то массив

/* урок 5 - замыкания */


// let createCounter = function(counterName) {
//   let counter = 0 

//   return function(){
//     console.log(counterName,++counter)
//   }

// }

// let counterA = createCounter('Счетчик 1')
// let counterB = createCounter('Счетчик 2')
// console.log('counterA: ', counterA)
// console.log('counterB: ', counterB)


// let createCounter2 = function(counterName) {
//   let counter = 0 

//   return {
//     increment: function(){
//       counter++
//     },

//     decrement:function(){
//       counter--
//     },

//     getCounter: function() {
//       return counter
//     }
//   }

// }

// let counterC = createCounter2('Рутина')
// let counterD = createCounter2('Грязь')

/* урок 6 - контекст */

// let person = {
//   age: 28,
//   name:"Max",
//   job:"Frontend",
//   displayInfo:function(ms) {
//     console.log("this:",this)
//     console.log("this.name:",this.name)
//     // let self = this //решение потери контекста через замыкание
//     setTimeout(function() {
//       // debugger
//       console.log("this",this)
//       console.log("this.name:",this.name)
//       console.log("this.job:",this.job)
//       console.log("this.age:",this.age)
//     }.bind(this),ms)
//   }
// }

// person.displayInfo(5000)

/* урок 7 - привязка контекста */

function printObject (objName) {
  console.log('objName:',objName)
  for(let field in this){
    if(this.hasOwnProperty(field)){
      console.log('['+ field + ']',this[field])
    }
  }

}

let obj = {
  name:'JACK',
  age: 33,
  job:'design',
  friends:['Игорь','Николь']
}

let car = {
  name:'Lada',
  model:'Pocus',
  year: 2012
}

let printPerson = printObject.bind(obj)
console.log('printPerson: ', printPerson)
printPerson('obj')

printObject.call(car,'Тачки')