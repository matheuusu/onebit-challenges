function square(arr) {
  const values = arr.toString().split('')

  const result = values
    .map(value => parseInt(Math.pow(parseInt(value), 2)))
    .join('')

  return parseInt(result)
}

console.log(square(3514))
console.log(square(94571))
console.log(square(24))
console.log(square(745821698))
