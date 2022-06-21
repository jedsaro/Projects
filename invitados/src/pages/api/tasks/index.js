import {dbConnect} from "utils/mongoose";
import Task from "models/Task";

dbConnect();

export default async function handler(req, res) {
  
  const {method, body } = req;

  switch (method) {

    case 'GET':
      try{
        const tasks = await Task.find();
        return res.status(200).json(tasks)
      } catch(err){
        return res.status(500).json({message: err.message})
      }
   
      case 'POST':
      try{
        const newInvitado = new Task(body)
        const savedTask = await newInvitado.save()
        return res.status(201).json(savedTask)
      } catch(err){
        return res.status(500).json({message: err.message})
      }

    default:
      return res.status(400).json({msg:'this method is not supported'})

  }


  //console.log(req.method, req.url);

}


