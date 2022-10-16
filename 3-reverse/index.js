function reverse(...args) {
  let newArray = []

  if (!args) return ''

  for (let i = 0; i < args.length; i++) {
    newArray[i] = args[args.length - 1 - i]
  }

  return newArray
}

console.log(reverse(0, 9, 6, 8, 9, 1, 5, 7))
console.log(reverse('oh', 'hi', 'mark'))
console.log(reverse(false, true, true, true))
console.log(reverse('its', 'not', true, 0))
