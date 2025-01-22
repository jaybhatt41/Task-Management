const express=require("express")
const {createTask,getAllTask, getSingleTask,updateTask, deleteTask}=require("../controller/taskController")
const router=express.Router()

router.post("/add",createTask)
router.get("/",getAllTask)
router.get("/:id",getSingleTask)
router.put("/update/:id",updateTask)
router.delete("/delete/:id",deleteTask)


module.exports=router