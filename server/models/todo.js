'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

// 定義該 collection 的 schema
const TodoSchema = new Schema({
  title: String,
  description: String,
  views: { type: Number, default: 0 },
  createAt: Date,
});

// 實際創造該 collection
// 第一個參數是該 collection 的名字，第二個參數是該 collection 的 schema
mongoose.model('todos', TodoSchema);

const Todo = mongoose.model('todos');

// query helper function
const getAllTodos = async () => Todo.find({}).sort({ createAt: 'desc' });

const getTodo = async (id) => Todo.findById(id);

const addTodo = ({ title, description }) => {
  const todo = new Todo({ title, description, createAt: Date.now() }).save();
  return todo;
};

const addView = async (id) => {
  const todo = await Todo.findOneAndUpdate({ _id: id }, { $inc: { views: 1 } }, { new: true });
  return todo;
};

const deleteTodo = (id) => Todo.findByIdAndRemove(id);

module.exports = {
  getAllTodos,
  getTodo,
  addTodo,
  addView,
  deleteTodo,
};
