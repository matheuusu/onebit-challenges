function invert(arg) {
  const letters = arg
    .toLowerCase()
    .split(' ')
    .map(letter => letter.split('').reverse().join(''))

  return letters.join(' ')
}

console.log(invert('Lorem ipsum dolor sec avanti'))
console.log(invert('This is an apple'))
console.log(invert('May the force be with you'))
console.log(invert('It s over nine thousand'))
