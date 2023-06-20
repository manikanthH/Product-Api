

const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {   
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        price:{
            type:Number,
            required:true,
            maxLength:50,
        },
        category:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        image:{
            type:String,
            required:true,
            maxLength:100000,
        },
    }
);

module.exports = mongoose.model("Todo", todoSchema);