import axios from 'axios';
import React from 'react';

const AddEdit = (props) => {

  const addNewTodo = async (todo) => {
    if(todo) {
      try {
        const response = await axios.post('https://localhost:7068/api/TodoItems', 
          {
            "name": todo,
            "isComplete": false
          }
        )
        
      } catch (err) {
        console.error(err);
      }
    }
  };

  const editTodo = async (todo, id) => {
    console.log("he")
    console.log(todo, id)
    try {
      const response = await axios.put(`https://localhost:7068/api/TodoItems/${id}`, 
        {
          "name": todo,
        }
      )
      props.setTodo(null);
            
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='bg-gray-100 p-2 rounded-lg font-semibold w-[90%] flex justify-between'>
        <input
          className='bg-gray-100 rounded-lg me-5 w-[90%] p-1'
          value={props.todo} 
          onChange={e => props.setTodo(e.target.value)}
        /> 
        <button 
          className='add-button '
          onClick={props.edit ? () => editTodo(props.todo, props.id) : () => addNewTodo(props.todo)}
        >
            {props.edit ? "Edit" : "Add"}
        </button>
      </div>
  )
}

export default AddEdit;
