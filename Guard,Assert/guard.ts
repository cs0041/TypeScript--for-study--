type Alphanumeric = string | number

const userPin = 123456
const userPassword = 'MyPass123'

function checkPassword(password: Alphanumeric): boolean {
  if (typeof password === 'string') {
    return password === userPassword
  }
  if (typeof password === 'number') {
    return password === userPin
  }
  return false
}

console.log(checkPassword('MyPass123'))
console.log(checkPassword('abc123'))
console.log(checkPassword(123456))
console.log(checkPassword(100000))

function formatDate(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

console.log(formatDate('2000-01-01'))
console.log(formatDate('2022-11-28'))
console.log(formatDate(new Date()))
