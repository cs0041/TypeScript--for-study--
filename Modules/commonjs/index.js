const { sum, pi } = require('./math')
const cowsay = require('cowsay')
const axios = require('axios').default

console.log(pi)
console.log(sum(5, 4))
console.log(cowsay.say({ text: 'Hello!' }))

axios.get('http://example.com').then(console.log).catch(console.error)