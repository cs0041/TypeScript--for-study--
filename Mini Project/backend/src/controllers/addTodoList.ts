import { RequestHandler } from 'express'
import { CommonResponseBody } from '..'
import { addTodo, TodoItem } from '../models/todo'

interface RequestBody extends Omit<TodoItem, 'id'> {
  // title:string
  //description?: string
}

export default <RequestHandler<unknown,CommonResponseBody,RequestBody>>((req, res) => {
  const id = addTodo(req.body)
  res.status(201).send({
    data:id
  })
})
