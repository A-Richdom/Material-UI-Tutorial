import { Card, CardContent, CardHeader, Typography, makeStyles, Button } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';


const useStyles = makeStyles((theme) => ({
  divContainer: {
    height: '150px',
    overflow: 'auto',
    overflowX: 'hidden',
    marginTop: '30px',
  },
  
  sectionContent: {
    width: '320px',
    minHeight: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '2px solid #ff8303',
    borderRadius: '10px',
    padding: '0 0 0 20px',
    marginBottom: '10px',
    // overflowY: 'auto',
  },
  typo: {
    fontSize: '1.5rem',
    // fontWeight: 'bold',
    color: 'whitesmoke'
  },
  lastTypo: {
    color: 'whitesmoke'
  }
}));

const GetTodo = () => {
  const classes = useStyles()
  const [todos, setTodos] = useState([]);

useEffect(() => {
  getTodo()
}, [])

  async function getTodo() {

    try {
      const response = await axios.get('http://localhost:5000/todo/getAll')
      setTodos(response.data.data)
      console.log('Response from API:', response.data);
    } 
    catch (error) {
      console.log({ error: error.message });
    }
  };

  return (
    <main>

      <div className={classes.divContainer}>
        
          {todos.map((todo, i) => (
            <section key={i} className={classes.sectionContent}>
              <div>
                <Typography  className={classes.typo}>{todo.title}</Typography>
                <Typography variant='body1' className={classes.lastTypo}>{todo.about}</Typography>
              </div>

              <Button
                className={classes.contentBtn}
                variant='outlined'
              >
                <ClearIcon/>
              </Button>
              
            </section> 
          ))}
        
      </div>
      
    </main>
  )
}

export default GetTodo