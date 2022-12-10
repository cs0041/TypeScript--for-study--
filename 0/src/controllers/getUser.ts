import { Request, Response } from 'express'
import { getUser } from '../models/user'

export default (req: Request, res: Response) => {
  res.send({ data: getUser(Number(req.params.index)) })
}
