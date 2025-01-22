const mongoose=require("mongoose")
const { validate } = require("./categoryModel")
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,'Title is required'],
        validate:{
            validator:function(value)
            {
                return value && value.trim().length > 0
            },
            message:'Title can not be empty'
        }

    },
    description:{
        type:String
    },
    completed:{
        type:Boolean,
        default:false
    },
    dueDate:{
        type:Date
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true
    }
})

module.exports=mongoose.model("Task",taskSchema)