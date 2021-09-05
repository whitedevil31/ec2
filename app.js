const express =require("express")
const app=express()

app.get('/',(req,res)=>res.send("Helo from app"))
app.get('/get',(req,res)=>{

res.send({
    "name":"nanda",
    "dept":"cse"
})


})
const port =3000
app.listen(port,()=>{
    console.log("server up")
})