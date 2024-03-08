import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const todoApi = () => {

    const initialDetails = {
      title: "",
      about: ""
    };

    const [dataVal, setDataVal] = useState(initialDetails);
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [iconsWrapperVisible, setIconsWrapperVisible] = useState(null);
    const {id} = useParams();

    //FETCHING TODOs FUNCTION....//
  const getTodos = async () => {

    try {
      const response = await axios.get('http://localhost:5000/todo/getAll')
      const todosData = response.data.data.map(todo => ({ ...todo, iconsWrapperVisible: false }));
      setTodos(todosData);
      // console.log('Response from API:', response.data);
    } 
    catch (error) {
      console.log({ error: error.message });
      setTodos([]);
    }
  };

  const fetchTodo = async() => {
    await getTodos();
  };

  //GET SINGLE TODO.........//
  const handleInfo = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/todo/getSingle/${id}`);
      console.log(data);
      setTodos(data);

      console.log('Single Todo Fetched', data);
    } catch (error) {
      console.log({ error: error.message });
    }
  };
 
 
  //DELETE TODO FUNCTION.....//
  const handleDelete = async (id) => {

    console.log('Deleting todo with ID:', id);

    try {
      const {data} = await axios.delete(`http://localhost:5000/todo/delete/${id}`)
      fetchTodo();
      console.log(id);

      console.log(data, 'Todo Deleted Successfully');
    } 
    catch (error) {
      console.log({ error: error.message });
    }
  };

  //UPDATE TODO FUNCTION...//
  const handleSave = async (id) => {

    try {
      const { data } = await axios.patch(`http://localhost:5000/todo/update/${id}`, dataVal)

      setDataVal(data)

      fetchTodo()
    } 
    catch (error) {
      console.log({ error: error.message });
    }
  };

  return {
    dataVal,
    setDataVal,
    loading,
    setLoading,
    todos,
    setTodos,
    iconsWrapperVisible,
    setIconsWrapperVisible,
    getTodos,
    fetchTodo,
    handleDelete,
    handleInfo,
    handleSave,
    
  };
};
