function greet(): string
function greet(name: string): string
function greet(names: string[]): string[]
function greet(name?: unknown) {
  if (!name) {
    return 'Hello world!'
  }
  if (typeof name === 'string') {
    return `Hello ${name}!`
  }
  if (Array.isArray(name) && name.every((item) => typeof item === 'string')) {
    const names = name as string[]
    // return `Hello ${names.join(', ')}!`
    return names.map((item) => `Hello ${item}!`)
  }
  throw new Error('Argument incorrect')
}

console.log(greet())
console.log(greet('John'))
console.log(greet(['John', 'Joe', 'Jane']))

// interface FindUserOptions {
//     firstName?: string
//     lastName?: string
//     age?: number
// }

// function findUser(options: FindUserOptions) {
//     // implement
// }

// findUser({ firstName: 'Joe' })
// findUser({ age: 18 })
