import { dbConnect  } from "utils/mongoose";
import Task from "models/Task";


dbConnect();

export default async (req,res) => {

  const {method, body, query:{id} } = req;

  switch (method) {
    case 'GET':
      try{
        const tasks = await Task.findById(id);
        return res.status(200).json(tasks)
      } catch(err){
        
        return res.status(500).json({message: err.message})
      }
    case 'PUT':
      try{
        const task = await Task.findByIdAndUpdate(id, body, {new: true})
        if (!task) return res.status(404).json({message: 'Invitado not found'})
        return res.status(200).json(task)
      } catch(err){

        return res.status(500).json({message: err.message})
      }
    case 'DELETE':
      try{
        const task = await Task.findByIdAndDelete(id)
        if(!task) return res.status(404).json({message: 'Invitado not found'})
        return res.status(200).json()
      } catch(err){
        return res.status(500).json({message: err.message})
      }
    case 'POST':
      try{
        const newTask = new Task(body)
        const savedTask = await newTask.save()
        return res.status(201).json(savedTask)
      } catch(err){
        return res.status(500).json({message: err.message})
      }
    default:
      return res.status(400).json({msg:'this method is not supported'})
  }

  //return res.status(200).json({message: 'Received a GET request'})
}