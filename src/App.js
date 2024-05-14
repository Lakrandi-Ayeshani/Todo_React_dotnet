import { useEffect, useState } from 'react';
import './App.css';
import Todos from './pages/Todos';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([
  ]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async() => {
    try {
      const response = await axios.get('https://localhost:7068/api/TodoItems') 
      console.log(response);
      setTodos(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App text-gray-500 font-semibold">
      <Todos todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
