"use strict";
const express = require('express');
const app = express();
const port = 3001;
app.listen(port, () => console.log(`running server on port:${port}`));
