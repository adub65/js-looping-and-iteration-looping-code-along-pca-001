function writeCards(names, message) {
  let array = []
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
  }
  return array
}

function countDown(i) {
  while (i >= 0) {
    console.log(i)
    i--
  }
}