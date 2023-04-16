const express=require("express")
const MongoClient=require("mongodb").MongoClient

const app=express()

app.use(express.json())

let database


app.get("/city",function(req,res){
    database.collection("cities").find({}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})


app.listen(6000,()=>{
    MongoClient.connect("mongodb://localhost:27017",{useNewUrlParser: true},(error,result)=>{
        if(error) throw error
       database =  result.db("userdetails")
    })
})