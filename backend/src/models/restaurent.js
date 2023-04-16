const mongoose = require('mongoose')

const { Schema } = mongoose;

const restaurantschema = new Schema({

    restaurant:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    city_id:{
        type:String
        },
        img:String
},{timestamps:true})

module.exports=mongoose.model("restaurant",restaurantschema)