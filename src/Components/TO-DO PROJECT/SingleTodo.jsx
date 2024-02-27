import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const SingleTodo = () => {
  const {id} = useParams()

  const handleDelete = async() => {
    try {
      const {data} = await axios.delete(`https://localhost:5000/delete/${id}`)

      console.log(data);
    } 
    catch (error) {
      console.log({ error: error.message });
    }
  };

  return (
    <div>
        
    </div>
  )
}

export default SingleTodo