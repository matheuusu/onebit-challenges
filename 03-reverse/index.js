function reverse(...args) {
  const newArray = []

  for (let i = args.length - 1; i >= 0; i--) {
    newArray.push(args[i])
  }

  return newArray
}

console.log(reverse(0, 9, 6, 8, 9, 1, 5, 7))
console.log(reverse('oh', 'hi', 'mark'))
console.log(reverse(false, true, true, true))
console.log(reverse('its', 'not', true, 0))
