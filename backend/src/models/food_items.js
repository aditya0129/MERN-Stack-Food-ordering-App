const mongoose = require('mongoose')

const { Schema } = mongoose;
const objectid=mongoose.Schema.Types.ObjectId;
const foodItemschema = new Schema({

    restaurant_id:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    option:{
        type:[{half:Number,full:Number}],
        required:true
    },
    img:String
},{timestamps:true})

module.exports=mongoose.model("food_item",foodItemschema)