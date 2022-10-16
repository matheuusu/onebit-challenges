function highestLetter(arg) {
  const letterArray = arg
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))

  return letterArray[letterArray.length - 1]
}

console.log(highestLetter('Lorem ipsum dolor sec avanti'))
console.log(highestLetter('Hello'))
console.log(highestLetter('May the force be with you'))
console.log(highestLetter('its over nine thousand'))
