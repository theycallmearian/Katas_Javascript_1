// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const shortMovie = []
const mediumMovie = []
const longMovie = []

//V1
/*
for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    shortMovie.push(movies[i])
  } else if (
    movies[i].durationInMinutes >= 100 &&
    movies[i].durationInMinutes < 200
  ) {
    mediumMovie.push(movies[i])
  } else {
    longMovie.push(movies[i])
  }
}
console.log('Las peliculas pequeñas:', shortMovie)
console.log('Las peliculas medianas:', mediumMovie)
console.log('Las peliculas grandes:', longMovie)
*/

//V2
for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    shortMovie.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovie.push(movie)
  } else {
    longMovie.push(movie)
  }
}

console.log('Las peliculas pequeñas:', shortMovie)
console.log('Las peliculas medianas:', mediumMovie)
console.log('Las peliculas grandes:', longMovie)
