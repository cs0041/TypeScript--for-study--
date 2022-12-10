import { Request, Response } from "express";
import { addUser } from "../models/user";
interface RequestBody {
    displayName: string,
    age: number
}



export default (req:Request<unknown,unknown,RequestBody>,res:Response) =>{
    addUser(req.body)
    res.sendStatus(201)

}