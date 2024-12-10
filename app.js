const express = require('express');
const app =  express();
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv')
dotenv.config();
const connectToDb = require('./config/db')
connectToDb();
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index.routes')

app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',indexRouter)
app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log('Server is Running on Port no 3000');
})