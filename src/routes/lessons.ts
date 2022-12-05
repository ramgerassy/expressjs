const { Router } = require('express')
import { NextFunction,Request,Response } from "express";

const router = Router();

interface Lessons {
    date: string,
    teacher: string
}
const lessons:Lessons[] = [{
    date: "15/12/22",
    teacher: "Shay Gerassy",
},
{
    date: "11/12/22",
    teacher: "Adi",
},]


router.get('',(req:Request,res:Response,next:NextFunction)=>{
    console.log('before handling request')
    next()
},(req:Request,res:Response)=>{
    res.send(lessons)
})

router.get('/:teacher',(req:Request,res:Response)=>{
    const { teacher } = req.params;
    const  teacherName = lessons.find((t)=> t.teacher === teacher)
    if(teacherName) res.send(teacherName)
    res.sendStatus(404)
})

router.post('',(req:Request,res:Response)=>{
    console.log(req.body);
    lessons.push(req.body)
    res.sendStatus(201)
})

module.exports = router;