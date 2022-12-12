import v, { pi as PI, sum, cowsay as mathCowsay } from './math'
import cowsay from 'cowsay'
import axios from 'axios'

console.log(v)
console.log(PI)
console.log(sum(5, 4))
console.log(mathCowsay('Hello world!'))
console.log(cowsay.say({ text: 'Hello world!' }))

axios.get('http://example.com').then(console.log).catch(console.error)