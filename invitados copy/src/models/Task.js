import { Schema, model, models } from "mongoose";

const invitados_schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    trim: true
  },

  status:{
    type: Boolean,
    default: false
  },

  table:{
    type: String,
    required: [true, 'Table is required'],
    trim: true,
    unique: false
  }
})

export default models.Task || model('Task', invitados_schema)