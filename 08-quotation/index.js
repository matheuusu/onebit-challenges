function quotation(arg) {
  const quotes = arg.toUpperCase().split(' ')
  let initials = ''

  for (let i = 0; i < quotes.length - 1; i++) {
    initials += `${quotes[i][0]}. `
  }

  return `${quotes[quotes.length - 1]}, ${initials}`
}

console.log(quotation('Isaac Larrubia Ferreira Pontes'))
console.log(quotation('John Ronald Reuel Tolkien'))
console.log(quotation('christopher james paolini'))
