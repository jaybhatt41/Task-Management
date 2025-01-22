const mongoose=require("mongoose")
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Category Name is required'],
        unique:true
    }
})
module.exports=mongoose.model("Category",categorySchema)