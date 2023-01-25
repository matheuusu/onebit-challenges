function smallerPairs(pair) {
  const result = []

  for (let i = 0; i <= pair[0]; i++) {
    for (let j = 0; j <= pair[1]; j++) {
      result.push([i, j])
    }
  }

  return result
}

console.log(smallerPairs([2, 2]))
console.log(smallerPairs([2, 7]))
console.log(smallerPairs([-3, -3]))
console.log(smallerPairs([7, 6]))
