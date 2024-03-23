// 1.1
const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25
console.log(character)

// 1.2
const firstName = 'Jon'
const lastName = 'Snow'
const age = 24

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)

// 1.3

const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }

console.log(toy1.price + toy2.price)

// 1.4 v1
let globalBasePrice = 10000
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }
globalBasePrice = 25000
//car1.finalPrice = globalBasePrice + car1.basePrice
//car2.finalPrice = globalBasePrice + car2.basePrice

// 1.4 v2
for (const car of [car1, car2]) {
  car.finalPrice = car.basePrice + globalBasePrice
}
console.log(car1.finalPrice, car2.finalPrice)
