// 1.1
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// 1.2
for (let i = 0; i < 9; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

//1.3
for (let i = 0; i < 10; i++) {
  if (i < 9) {
    console.log('Intentando dormir 🐑')
  } else {
    console.log('Dormido!')
  }
}
//1.3 v2
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log('Dormido!')
  } else {
    console.log('Intentando dormir 🐑')
  }
}
