//import th model
const Todo = require("../models/Todo");
const jwt = require("jsonwebtoken");

const createJwtToken = (payload, secretKey)=> {
    return jwt.sign(payload, secretKey);
  }


//define route handler

exports.getProduct = async(req,res) => {
    try {
            //fetch all todo items from database
            const todos = await Todo.find({});
            const token =   createJwtToken({name:'Manish Kumar'},"abc123")

            //response
            res.status(200)
            .json({
                success:true,
                data:todos,
                message:"Entire Products Data is fetched",
                token:token
            });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}


exports.getProductById = async(req, res) => {
    try {
       //extract todo items basis on id
       const id = req.params.id;
       const todo = await Todo.findById( {_id: id})

       //data forgiven id not found
       if(!todo) {
        return res.status(404).json({
            success:false,
            message:"No Data Found woth Given Id",
        })
       }
       //data for given id FOUND
       res.status(200).json({
        success:true,
        data:todo,
        message: `Product ${id} data successfully fetched`,
       })

    }

    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}
