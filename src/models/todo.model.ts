import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  text: String,
  done: Boolean,
});

const Todo = model('Todo', todoSchema);

export default Todo;
