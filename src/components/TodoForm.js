import React, { useState } from 'react';

function TodoForm (props) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return;
    props.addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="formInput" 
        value={value}
        placeholder="Add Todo" 
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default TodoForm;