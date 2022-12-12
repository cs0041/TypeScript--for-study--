import express from 'express'
import dotenv from 'dotenv'
import getTodoList from './controllers/getTodoList'

export interface CommonResponseBody{
    data?: any
}

dotenv.config()

const app = express()

app.use(express.json())

app.get('/api/todo', getTodoList)
app.post('/api/todo', getTodoList)


const port = Number ( process.env.PORT || 3000 )

app.listen(port, ()=>{
    console.log(`Server listening on port http://localhost:${port}`)
})