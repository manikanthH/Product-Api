//import th model
const Todo = require("../models/Todo");
//define route handler

exports.createProduct = async(req,res) => {
    try {
            //extract title and description from reauest body
            const {title,price,category,description,image} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,price,category,description,image});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully for Product'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
