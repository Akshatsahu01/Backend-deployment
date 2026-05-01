const express=require('express')
const app=express()
app.get("/",(res,req)=>{
    res.statusCode(200).json({message:"Hello word "})
})
app.listen(3000,()=>{
    console.log("server is running")
})