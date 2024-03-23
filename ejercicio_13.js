// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: ista (cuando eliminamos algo de un array, su longitud se verá afectada)

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, value) {
  const index = array.indexOf(value)
  if (index !== -1) {
    return { exist: true, position: index }
  } else {
    return { exist: false }
  }
}

console.log(finderName(nameFinder, 'Bruce'))
console.log(finderName(nameFinder, 'Arian'))
