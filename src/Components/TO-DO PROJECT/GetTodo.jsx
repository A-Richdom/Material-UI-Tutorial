import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetTodo = () => {
const [todos, setTodos] = useState()

useEffect(() => {
  getTodo
}, [])


  async function getTodo() {

    try {
      const response = await axios.get('http://localhost:5000/todo/getAll')
      setTodos(response.data)
      console.log('Response from API:', response.data);
    } 
    catch (error) {
      console.log({ error: error.message });
    }
  };

  return (
    <div>
      {}
      
    </div>
  )
}

export default GetTodo