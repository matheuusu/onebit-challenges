function average(...args) {
  const total = args.reduce((accum, num) => {
    return accum + num
  }, 0)

  return total / args.length
}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7))
console.log(average(2, 5, 7, 1, -2))
console.log(average(10, 10, 10, 10, 9))
console.log(average(25, 75))
