const { response } = require("express");
const Category = require("../model/categoryModel");

// Add Category

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "Category name is required and cannot be empty." });
    }
    const category = new Category({ name });
    await category.save();
    res.status(200).json({ message: "Category Added Successfully", category });
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(400)
        .json({ error: "Category Name already exist pls enter unique name" });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

// Get All Category
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving categories" });
  }
};

// Get By ID

const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Category

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    
    if(!name || name.trim().length=== 0)
    {
        return res.status(400).json({error:"Category name can not be empty"})
    }
    const category=await Category.findByIdAndUpdate(id,{name},{new:true})
    if(!category)
    {
        return res.status(404).json({error:"Category not found"})
    }
    res.status(200).json({message:"Category updated successfully",category})
  } catch (error) {
    if (error.code === 11000) {
        res
          .status(400)
          .json({ error: "Category Name already exist pls enter unique name" });
  }
  else
  {
    res.status(400).json({error:error.message})

  }
}
};

// Delete Category 
const deleteCategory=async(req,res)=>{
    try {
        const {id}=req.params
        const response=await Category.findByIdAndDelete(id)
        if(!response)
        {
            return res.status(404).json({error:"Category Not found"})
        }
        res.status(200).json({message:"Deleted successfully"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports = { createCategory, getAllCategories, getSingleCategory,updateCategory,deleteCategory };
