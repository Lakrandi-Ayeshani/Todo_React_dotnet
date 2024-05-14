import React, { useState } from 'react'
import Todo from '../components/Todo'
import AddEdit from '../components/AddEdit';

const Todos = (props) => {
  const [todo, setTodo] = useState(null);
  const [edit, setEdit] = useState(null);

  return (
    <div className='flex flex-col items-center m-10 space-y-14'>
      <AddEdit todo={todo} setTodo={setTodo} edit={edit} setEdit={setEdit}/>
      <div className='w-[90%] space-y-2 border rounded-lg p-4'>
        <h1>Todos</h1>
        {props.todos.map(todo => (
          <Todo key={todo.id} setTodos={props.setTodos} todo={todo} setEdit={setEdit} setTodo={setTodo}/>
        ))}
      </div>
    </div>
  )
}

export default Todos