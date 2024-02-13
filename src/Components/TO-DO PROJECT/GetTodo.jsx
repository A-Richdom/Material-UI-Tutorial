import { Card, CardContent, CardHeader, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core'
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
    justifyContent: 'space-between',
    border: '2px solid #ff8303',
    borderRadius: '10px',
    padding: '0 0 0 20px',
    marginBottom: '10px',
    // overflowY: 'auto',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  typo: {
    fontSize: '1.5rem',
    // fontWeight: 'bold',
    color: 'whitesmoke'
  },
  lastTypo: {
    color: 'whitesmoke'
  },
  iconWrapper: {
    display: 'flex',
    color: '#ff8303',
    border: '2px solid #ff8303',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContent: {
    fontSize: '16px',
    padding: '8px'

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
              <div className={classes.textContent}>
                <Typography  className={classes.typo}>{todo.title}</Typography>
                <Typography variant='body1' className={classes.lastTypo}>{todo.about}</Typography>
              </div>

              <Button
                className={classes.btnContent}
                variant='outlined'
              >
                <div className={classes.iconWrapper}>
                  <ClearIcon className={classes.iconContent}/>
                </div>
              </Button>
              
            </section> 
          ))}

          <ButtonGroup>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </ButtonGroup>
        
      </div>
      
    </main>
  )
}

export default GetTodo