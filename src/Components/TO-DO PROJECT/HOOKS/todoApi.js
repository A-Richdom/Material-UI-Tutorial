import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export const initialDetails = {
    title: "",
    about: ""
};

export const todoApi = () => {
    const [details, setDetails] = useState(initialDetails);
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [iconsWrapperVisible, setIconsWrapperVisible] = useState(null);


    //FETCHING FUNCTION
  async function getTodo() {

    try {
      const response = await axios.get('http://localhost:5000/todo/getAll')
      return response.data.data.map(todo => ({ ...todo, iconsWrapperVisible: false }));
      // setTodos(todosData);
      // console.log('Response from API:', response.data);
    } 
    catch (error) {
      console.log({ error: error.message });
      return[];
    }
  }
}
