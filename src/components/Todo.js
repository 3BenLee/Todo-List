import React from 'react';
import './Todo.css';

function Todo(props) {

//   <div>
//   {isLoggedIn ? (
//     <LogoutButton onClick={this.handleLogoutClick} />
//   ) : (
//     <LoginButton onClick={this.handleLoginClick} />
//   )}
// </div>

  return (
    <div>
      {!props.todos ? (<div/>) :
        (<div style={{textDecoration: props.todo.isCompleted ? "line-through" : ""}}>
          {props.todo.text}
          <button onClick={props.clicked}>
            {props.todo.isCompleted ? "Undo" : "Complete"}
          </button> 
        </div>)}
    </div>
  )
}

export default Todo;