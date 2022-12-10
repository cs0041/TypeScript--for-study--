import { Request, Response } from "express";
import { users } from "../models/user";

export default (req: Request, res: Response) => {
    res.send({data:users})
}
