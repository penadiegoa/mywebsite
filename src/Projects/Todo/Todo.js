import React from 'react';

import './Todo.css';


const Todo = () => {
  return (
    <div className="comp-container">
      <div className="todo-home">
        <img className="todo-img" src="../../assets/img/todo_home.PNG" alt="todo_home"/>
      </div>
      <div className="todo-new">
        <img className="todo-img" src="../../assets/img/todo_new.PNG" alt="todo_home"/>
      </div>
    </div>
  )
};

export default Todo;