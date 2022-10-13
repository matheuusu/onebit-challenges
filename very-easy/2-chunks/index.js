function chunks(value) {
  if (!value) return ''

  if (value === 1) {
    return 'chunk'
  } else {
    return `chunk-${chunks(value - 1)}`
  }
}

console.log(chunks(4))
console.log(chunks(1))
console.log(chunks(8))
console.log(chunks(2))
