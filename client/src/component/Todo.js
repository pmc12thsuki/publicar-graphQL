import React from 'react';
import { Link } from 'react-router-dom';

const Todo = ({todo}) => (
  <div className="card darken-1">
    <Link to={`/todo/${todo.id}`} style={{ color: '#000' }}>
      <div className="card-content">
        <span className="card-title">{ todo.title }</span>
        <p className="right">Create At: { new Date(parseInt(todo.createAt)).toLocaleDateString() }</p>
      </div>
    </Link>
    <div className="card-action">
        <a>Views: {todo.views.toString()}</a>
    </div>
  </div>
)

export default Todo;