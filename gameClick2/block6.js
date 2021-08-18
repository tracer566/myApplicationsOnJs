// let car = {
//   name: 'Lada',
//   age: 2012,
//   color: 'blue'
// }
// car.__proto__.text = 'Я добавил'
// car.prototype.text = 'Я добавил' //выведет ошибку,таким способом прототип в такой объект не добавишь

// console.log(car)
 
//функция являющаяся классом
// function Car(name,age){
//   this.name = name
//   this.age = age
// }

// Car.prototype.calcAgeCar = function(){
//   return new Date().getFullYear() - this.age
// }

// Car.prototype.color = "black"


// let ford = new Car('Ford',2002)
// let bmw = new Car('BMW',2020)
// console.log(ford,bmw)

// console.log('ford.calcAgeCar()',ford.calcAgeCar()) //вызов метода из прототипа

// ford.color = "red"

//функция являющаяся классом
// function Clothers(name,color,size,id){
//   this.name = name
//   this.color = color
//   this.size = size
//   this.id = id
// }

// Clothers.prototype.color = 'Цвет прототипа'
// Clothers.prototype.name = 'Имя прототипа'
// Clothers.prototype.id = 'id прототипа'
// Clothers.prototype.size = 'размер прототипа'

// let tShirt = new Clothers('Футболка','Черная',40,549594060)
// console.log('tShirt: ', tShirt)


/* способ создания и настройки, объектов урок 3 */

var mashine = Object.create({
  CalcDistanceYear:function(){
    // this.per = 3445 //1-й способ задать ключ в метод прототипа
    Object.defineProperty(this, 'distancePearYear',{
      value: Math.ceil(this.distance / this.age), //подсчет пробега за 1 год
      enumerable: true,
      writable: false,
      configurable: false
    })
  }
},{
  name:{
    value:'Ford',
    enumerable:true,
    writable:false,
    configurable:false
  },
  model:{
    value:'Focus',
    enumerable:true,//видимость объекта при перечисление свойств и окраска с бледного на цветной
    writable:false,//возможность изменить или переписать объект с помощью =, объект сейчас стоит false
    configurable:false// возможность удалить объект через delete
  },
  year:{
    value: 2017,
    enumerable:true,
    writable:false,
    configurable:false
  },
  distance:{
    value: 230789, //общий пробег
    enumerable:true,
    writable:true,
    configurable:false
  },
  age:{
    get:function(){
      console.log('Получаем возраст')
      return new Date().getFullYear() - this.year
    },

    set:function(){
      console.log('Устанавливаем значение')
    },
    enumerable:true
  }
})

// console.log('mashine',mashine)

// mashine.CalcDistanceYear()
// /* цикл перебора ключей объектов,метод перебирает и прототип  */

// for(var key in mashine){
//   //hasOwnProperty проверяет наличие свойства в прототипе объекта
//   if(mashine.hasOwnProperty(key)){
//   console.log('key:',key,'Значение:',mashine[key])
//   }
// }

// for(var key in mashine){
//   console.log('key+прототип:',key,'Значение:',mashine[key])
// }

/* методы перебора объектов */

// let person = {
//   name:'Jack',
//   job: 'backend developer',
//   age: 27
// }

// console.log(person.__proto__ === Object.prototype)

// for(let key in person){
//   console.log(person[key])
// }

// let myKeys = Object.keys(person)
// console.log('myKeys: ', myKeys)

// Object.keys(person).forEach(function(item){
//   console.log('item:',person[item])
// })

// myKeys.forEach(function(elem){
//   console.log('elem',person[elem])
// })