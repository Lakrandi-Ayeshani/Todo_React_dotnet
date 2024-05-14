import axios from 'axios';
import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill, RiCheckboxMultipleBlankLine, RiCheckboxMultipleLine } from "react-icons/ri";

const Todo = (props) => {
    const handleDelete = async (todo) => {
        try {
            const response = await axios.delete(`https://localhost:7068/api/TodoItems/${todo.id}`);
            if(response){
                alert(`Successfully deleted ${todo.name}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleEdit = (todo) => {
        props.setEdit(todo);
        props.setTodo(todo.name)
    };

    return (
        <div className='flex gap-2 border rounded-lg p-3 ps-3 bg-gray-100'>
            <RiCheckboxMultipleBlankLine className='mt-1'/>
            <div className='text-start w-[85%] lg:w-[90%]'>{props.todo.name}</div>
            <div 
                onClick={() => handleDelete(props.todo)}
                className="flex align-end rounded-full hover:bg-gray-200 p-2 "
            >
                <RiDeleteBin6Line 
                    className=' w-[100%] text-red-600 hover:text-red-400 active:text-red-800'
                />
            </div>
            <div 
                onClick={() => handleEdit(props.todo)}
                className="rounded-full hover:bg-gray-200 p-1 px-2"
            >
                <RiEdit2Fill 
                    className='mt-1 w-[100%] text-green-600 hover:text-green-400 active:text-green-800'
                />
            </div>
        </div>
    )
}

export default Todo