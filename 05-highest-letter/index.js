function highestLetter(string) {
  const letters = string
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))

  return letters[letters.length - 1]
}

console.log(highestLetter('Lorem ipsum dolor sec avanti'))
console.log(highestLetter('Hello'))
console.log(highestLetter('May the force be with you'))
console.log(highestLetter('its over nine thousand'))
