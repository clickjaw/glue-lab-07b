"use strict";

const express = require('express');
const app = express();
const PORT = 3002;
const cors = require('cors')
app.use(cors())


app.get('/', (req, res)=>{
    console.log('server ping');
    res.send('Glue Lab 7B Home Page')
})

const userRouter = require('./routes/users.js')
app.use('/users', userRouter);




app.listen(PORT, () => console.log(`Keep going. PORT: ${PORT}`))
