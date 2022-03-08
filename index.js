const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRouter = require('./contactRouter.js')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/contact', contactRouter)

// app.get('/', (req,res)=>{
//     res.json("Working")
// })

app.listen(port, (err)=> {
    if(err){
       console.log(err)
    }else{
        console.log("Server is up & running")
    }
})

try{    
    mongoose.connect(process.env.DB_CONNECTION_URL, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Database Connected")
        }
    })
}catch(err){
    console.log(err)
}