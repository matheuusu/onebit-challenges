function sorted(arg) {
  const flatSorted = []

  for (let element of arg) {
    flatSorted.push(...element)
  }

  return flatSorted.sort((a, b) => a - b)
}

console.log(
  sorted([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103]
  ])
)

console.log(
  sorted([
    [1, 3],
    [4, 8],
    [7, 5],
    [2, 6]
  ])
)
