import express from 'express'
import dotenv from 'dotenv'
import getTodoList from './controllers/getTodoList'
import addTodoList from './controllers/addTodoList'
import cors from 'cors'
// import proxy from 'express-http-proxy'


export interface CommonResponseBody {
  data?: any
}

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.get('/api/todo', getTodoList)
app.post('/api/todo', addTodoList)
// app.use('/', proxy('http://127.0.0.1:4000/'))

const port = Number(process.env.PORT || 3000)
app.listen(port, () => {
  console.log(`App listening http://localhost:${port}/`)
})
