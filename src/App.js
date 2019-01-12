import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App () {

  ///// todos is the 'state', and setTodos is like 'setState' /////
  const [todos, setTodos] = useState([{}]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log(todos);
  }

  const completeTodo = (index) => {
    const doneTodos = [...todos];
    doneTodos[index].isCompleted = true;
    setTodos(doneTodos);
  }

  // toggle = () => {
  //   this.setState({
  //     modalOpen:!this.state.modalOpen 
  //   });
  // };

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map(( todo, index ) => (
          <Todo key={index} 
            index={index} 
            todo={todo} 
            clicked={() => completeTodo(index)} 
            />
      ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;