import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from './TodoList';
import NewsList from './NewsList';


const DashBoard = () => {
  return (
    <div> 
      <TodoList/>
      < NewsList/>
        <div className='fixed-action-btn'>
        <Link to="/todo/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
      </div>
  )
}

export default DashBoard;