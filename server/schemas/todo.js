'use strict';

const { gql } = require('apollo-server');

// Schema
const typeDefs = gql`
extend type Query {
  getAllTodos: [Todo]
  getTodoById(id: ID) : Todo
}
type Todo {
    id: ID!
    title: String!
    description: String
    views: Int
    createAt: String
}

extend type Mutation {
  addTodo(title: String!,  description: String): Todo
  addView(id: ID): Todo
  deleteTodo(id: ID): Todo
}
`;

// resolvers
const resolvers = {
  Query: {
    getAllTodos: (root, args, { todoModel }) => todoModel.getAllTodos(),
    getTodoById: (root, { id }, { todoModel }) => todoModel.getTodo(id),
  },
  Mutation: {
    addTodo: (root, args, { todoModel }) => todoModel.addTodo(args),
    addView: (root, { id }, { todoModel }) => todoModel.addView(id),
    deleteTodo: (root, { id }, { todoModel }) => todoModel.deleteTodo(id),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
