function chunks(size) {
  if (!size) return ''

  if (size === 1) {
    return 'chunk'
  } else {
    return `chunk-${chunks(size - 1)}`
  }
}

console.log(chunks(4))
console.log(chunks(1))
console.log(chunks(8))
console.log(chunks(2))
