const express =require("express")
const app=express()

app.get('/',(req,res)=>res.send("Updated the code Helo from app"))
app.get('/post',(req,res)=>res.send("Posting some data"))
app.get('/get',(req,res)=>{

res.send({
  "about":"Imma gangsta"
})


})
const port =3000
app.listen(port,()=>{
    console.log("server up")
})