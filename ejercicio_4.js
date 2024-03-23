//1.1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
// 1.2
avengers[0] = 'IRONMAN'
console.log(avengers[0])

//1.2 V2
//avengers.shift()
//avengers.unshift('IRON MAN')
//console.log(avengers)

//1.3
console.log(avengers.length)

//1.4
//const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
//console.log(rickAndMortyCharacters[2])

//1.5
const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

//rickAndMortyCharacters.pop()
console.log(
  rickAndMortyCharacters[0],
  rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
)

// 1.6
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)
