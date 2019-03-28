import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';


const todoDetailQuery = gql `
  query todoDetail($id: ID!) {
    getTodoById(id: $id) {
      id
      title
      description
      views
      createAt
    }
  }
`

const addViewQuery = gql`
  mutation addView($id: ID!) {
    addView(id: $id) {
      id
    }
  }
`

const deleteTodoQuery = gql `
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

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

class TodoDetail extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <Query query={todoDetailQuery} variables={{ id: id }}>
      {({ loading, error, data}) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>
        const {getTodoById} = data;
        const {title, id, description, views, createAt} = getTodoById;
        return (
          <div>
            <div class="section">
              <div class="row">
                <div class="col s12 m12">
                  <div class="icon-block">
                    <p class="center light-blue-text"><i class="material-icons">flash_on</i></p>
                    <h4 class="center">{title}</h4>
                    <p class="light" style={{fontSize: '14pt'}}>{description}</p>
                    <p class="light right">Create At: { new Date(parseInt(createAt)).toLocaleDateString() }</p>
                  </div>
                </div>
              </div>

            </div>

            <Mutation mutation={addViewQuery} refetchQueries={() => { return [{ query: getAllTodosQuery }];}} awaitRefetchQueries={true}>
              {(addView) => 
                <Link to="/" className="teal btn-flat white-text" onClick={() => addView({ variables: { id: id }})}> 
                  Back 
                </Link>}
            </Mutation>

            <Mutation mutation={deleteTodoQuery} refetchQueries={() => { return [{ query: getAllTodosQuery }];}} awaitRefetchQueries={true}>
              {(deleteTodo) => 
              <Link to="/" className="btn-floating right red" onClick={() => deleteTodo({ variables: { id: id}})}>
                <i className="material-icons">delete</i>
              </Link>}
            </Mutation>
          </div>
        )
      }}
      </Query>
    )
  }
}

export default TodoDetail;