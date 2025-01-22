require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const categoryRoutes=require("./routes/categoryRoutes")

const app=express()
const PORT=process.env.PORT

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI
).then(()=>console.log("Connected to DB")).catch(error=>console.log("Error to connecting mongoDB",error));

app.use("/category",categoryRoutes)

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`);
    
})