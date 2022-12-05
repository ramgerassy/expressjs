"use strict";
const express = require('express');
const lessonsRoutes = require('./routes/lessons');
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/lessons', lessonsRoutes);
app.listen(port, () => console.log(`running server on port:${port}`));
