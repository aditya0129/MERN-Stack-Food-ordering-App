const mongoose = require('mongoose')

const { Schema } = mongoose;
const cityschema = new Schema({
    city:String,
    state:String,
    img:String
},{timestamps:true})

module.exports=mongoose.model("citie",cityschema)