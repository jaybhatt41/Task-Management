const express=require("express")
const {createCategory,getAllCategories,getSingleCategory,updateCategory,deleteCategory}=require("../controller/categoryController")
const router=express.Router()

router.post("/add",createCategory)
router.get("/",getAllCategories)
router.get("/:id",getSingleCategory)
router.put("/update/:id",updateCategory)
router.delete("/delete/:id",deleteCategory)




module.exports=router