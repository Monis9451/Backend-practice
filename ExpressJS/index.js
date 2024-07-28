const express = require("express")
const app = express()
// console.dir(app)
let port = 3000

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})

app.get("/",(req,res)=>{
    console.log("You requested root path")
})
app.get("/apple",(req,res)=>{
    console.log("You requested apple path")
})
app.get("/orange",(req,res)=>{
    console.log("You requested orange path")
})

// app.use((req,res)=>{
//     console.log("Your request received")
//     res.send("This is a basic response")
// })