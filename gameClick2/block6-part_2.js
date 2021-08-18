/* урок 5 - замыкания */

// let createCounter = function(counterName){
//   let counter = 0

//   return function(){
//     console.log(counterName, ++counter)
//   }
// }

// let counterA = createCounter('CounterA')
// let counterB = createCounter('CounterB')

// console.log(counterA())
// console.log(counterB())


// let createCounter2 = function(counterName){
//   let counter = 0

//   return {
//     increment: function(){
//       counter++
//     },
//     decrement: function(){
//       counter--
//     },
//     getCounter: function(){
//       return counter
//     }
//   }
  
// }

// let counterA = createCounter2('CounterA')
// let counterB = createCounter2('CounterB')

// counterA.increment()
// counterA.increment()
// counterA.increment()

// counterB.decrement()
// counterB.decrement()
// counterB.decrement()


/* урок 6-контекст this */


// var person = {
//   age:38,
//   name:'Bill',
//   job:'backend',
//   displayInfo: function(ms){
    
//     // var thisIs = this //1-й способ привязать this к person а не к window

//     setTimeout(function(){
//     // debugger
//     console.log('name:',this.name)
//     console.log('job:',this.job)
//     console.log('age:',this.age)
//     }.bind(this),ms)
    
//   }
// }

// person.displayInfo(5000)

/* урок 7 - привязка контекста */

function printObj(objName){

}

var obj = {
  age:38,
  name:'Bill',
  job:'backend',
  friends:['Ленчик','Кристинка']
}

var car = {
  name:'Ford',
  model:'Focus',
  year: 2013
}