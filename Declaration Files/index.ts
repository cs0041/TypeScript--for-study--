import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.NODE_ENV)
console.log(process.env.PORT)
console.log(process.env.DATABASE_URL)
