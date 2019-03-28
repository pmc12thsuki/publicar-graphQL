import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Todo from './Todo';

const getAllTodosQuery = gql `
{
  getAllTodos {
    id
    title
    views
    createAt
  }
}
`
const TodoList = () => (
  <Query query = {getAllTodosQuery} > 
  {({ loading, error, data }) => {
      if (loading) return <p> Loading... </p>;
      if (error) return <p> Error </p>;
      return data.getAllTodos.map((t) => (
        <Todo key={t.id} todo = {t}/>
      ));
    }} 
  </Query>
);

export default TodoList;