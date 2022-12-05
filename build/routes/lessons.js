"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const lessons = [{
        date: "15/12/22",
        teacher: "Shay Gerassy",
    },
    {
        date: "11/12/22",
        teacher: "Adi",
    },];
router.get('', (req, res, next) => {
    console.log('before handling request');
    next();
}, (req, res) => {
    res.send(lessons);
});
router.get('/:teacher', (req, res) => {
    const { teacher } = req.params;
    const teacherName = lessons.find((t) => t.teacher === teacher);
    if (teacherName)
        res.send(teacherName);
    res.sendStatus(404);
});
router.post('', (req, res) => {
    console.log(req.body);
    lessons.push(req.body);
    res.sendStatus(201);
});
module.exports = router;
