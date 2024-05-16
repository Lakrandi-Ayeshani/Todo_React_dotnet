import axios from 'axios';
import React from 'react';

const AddEdit = (props) => {

  const handleButtonClick = () => {
    if(props.edit) {
      console.log("1")
      editTodo();
    } else {
      addNewTodo();
    }
  }

  const addNewTodo = async () => {
    try {
      const response = await axios.post('https://localhost:7068/api/TodoItems', 
        {
          "name": props.todo,
          "isComplete": false
        }
      )
      
    } catch (err) {
      console.error(err);
    }
  };

  const editTodo = async () => {
    try {
      const response = await axios.put(`https://localhost:7068/api/TodoItems/${props.edit.id}`, 
        {
          "id": props.edit.id,
          "name": props.todo,
          "isComplete": props.edit.isComplete
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
          placeholder='Add todo...'
          className='input bg-gray-100 rounded-lg me-5 w-[90%] p-1 placeholder:italic placeholder:font-thin '
          value={props.todo} 
          onChange={e => props.setTodo(e.target.value)}
        /> 
        <button 
          className='add-button '
          onClick={handleButtonClick}
        >
            {props.edit ? "Edit" : "Add"}
        </button>
      </div>
  )
}

export default AddEdit;
