import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { withRouter, Link } from 'react-router-dom';

const addTodoQuery = gql`
  mutation AddTodo($title: String!, $description: String) {
    addTodo(title: $title, description: $description) {
      title
      description
    }
  }
`;

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

const TodoNew = (props) => {
  let titleInput;
  let descriptionInput;

  return (
    <Mutation mutation={addTodoQuery} refetchQueries={() => { return [{ query: getAllTodosQuery }];}} awaitRefetchQueries={true} >
      {(addTodo, { data }) => (
        <div className="row" style={{'margin': '10px 0'}}>
          <form className="col s12"
            onSubmit={e => { e.preventDefault();
              addTodo({
                variables: { title: titleInput.value, description: descriptionInput.value }
              }).then(() => props.history.push('/'));
              titleInput.value = "";
              descriptionInput.value = "";
            }}
          >
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" ref={node => { titleInput = node}}/>
              <label className="active" for="title">Title</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              {/* <input id="desc" type="text" ref={node => { descriptionInput = node}}/> */}
              <textarea id="desc" className="materialize-textarea" ref={node => { descriptionInput = node}}></textarea>
              <label className="active" for="desc">Content</label>
            </div>
          </div>

            <Link to='/' className="red  darken-1 btn-flat white-text"> Cancel </Link>
            <button style={{'margin': '20px 0'}} className="teal btn-flat white-text right" type="submit">Post</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default withRouter(TodoNew);
