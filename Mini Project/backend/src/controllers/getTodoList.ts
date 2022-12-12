import {  RequestHandler } from "express";
import { CommonResponseBody } from "..";
import { todo } from "../models/todo";

export default <RequestHandler<unknown,CommonResponseBody>>((req,res) =>{
    res.send({
        data:todo
    })
})