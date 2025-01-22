const Task = require("../model/taskModel");
const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;
    if (!title || title.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "Title is required and cannot be empty." });
    }
    const task = new Task({ title, description, dueDate, category });
    await task.save();
    res.status(200).json({ msg: "Task is Added successfully", task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTask = async (req, res) => {
  try {
    const task = await Task.find().populate("category");
    if (!task) {
      return res.status(404).json({ error: "Tasks not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id).populate("category");
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed, dueDate, category } = req.body;
    if (!title || title.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "Title is required and cannot be empty." });
    }
    const task=await Task.findById(id)
    if(!task)
    {
        return res.status(404).json({error:"Task not found"})
    }
    if(completed !== undefined && task.completed===completed)
    {
        return res.status(400).json({error:`Task is already ${completed ? "completed" : "pending"}`})
    }
    task.title=title || task.title
    task.description=description || task.description
    task.completed=completed !== undefined ? completed : task.completed
    task.dueDate=dueDate || task.dueDate
    task.category=category || task.category

    await task.save()
    const updatedtask=await Task.findById(id).populate('category')
    res.status(200).json(updatedtask)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

const deleteTask=async(req,res)=>{
    try {
        const {id}=req.params
        const task=await Task.findByIdAndDelete(id)
        if(!task)
        {
            return res.status(404).json({error:"Task not found"})
        }
        res.status(200).json({message:"Deleted successfully"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports = { createTask, getAllTask, getSingleTask,updateTask,deleteTask };
