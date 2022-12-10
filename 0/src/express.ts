import express from 'express'
import creatUser from './controllers/creatUser'
import getUser from './controllers/getUser'
import getUsers from './controllers/getUsers'

const app =express()

app.use(express.json())

app.get('/users',getUsers)
app.get('/users/:index',getUser)
app.post('/users',creatUser)


app.listen(3000,()=>{
    console.log('App list on https://localhost:3000/')
})