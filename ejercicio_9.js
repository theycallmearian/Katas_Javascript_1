const numbers = [1, 2, 3, 5, 45, 37, 58]
let sum = 0

function sumAll(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

console.log(sumAll(numbers))
