import { Button, Card, CardContent, Container, TextField, Typography, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import axios from 'axios';
import GetTodos from './GetTodos';
import { todoApi } from './/HOOKS/todoApi';



const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
   
  },
  card: {
    backgroundColor: '#1b1a17',
    width: '390px',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '20px'
  },
  cardContent: {
    padding:'30px 60px',
  },
    form: {
    width: '100%', 
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
  
  },
  field: {
    color: 'white',
    width: '270px',
    // height: '40px',
    fontFamily: theme.typography.fontFamily,
    marginBottom: '16px',
    '& .MuiOutlinedInput-input': {
        color: 'white',
        height: '5px',
        textAlign: 'center',
        backgroundColor: '#242319',
        paddingTop: '15px',
    },
    '& .MuiInputLabel-root': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '-8px',
      color: 'whitesmoke', 
    },
    
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff8303',
      borderRadius: '7px',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px', // Ensure the border width is consistent
    },
  },
  addBtn: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontWeightRegular,
    border: '2px solid #ff8303',
    height: '90px',
    borderRadius: '7px',
    color: 'white',
    marginBottom: '16px',
  },
notask: { 
    display: 'inline-block',
    width: '110px',
    height: '40px',
    fontFamily: theme.typography.fontFamily,
    fontSize: '25px',
    border: '2px solid #ff8303',
    borderRight: 'none',
    borderLeft: 'none',
    color: 'whitesmoke',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 115px'
  },  
  notaskText: {
    display: 'inline-block',
    width: '100%', 
    textAlign: 'center',
    margin: '3px',
    justifyContent: 'center'
  },
  
}));

const PostTodo = () => {
  const classes = useStyles()
  const [todos, setTodos] = useState({})
   const { initialDetails, dataVal, setDataVal, loading, setLoading, fetchTodo } = todoApi();


  //HANDLE CHANGE
  function handleChange(e) {
    console.log(e.target.value);

    const { name, value} = e.target;

    setDataVal((prevDetails) => ({...prevDetails, [name]: value }))
    // setTodos({...todos, [key]: val })
  };

  //HANDLE SUBMIT....//
  async function handleSubmit(e) {
    e.preventDefault();
    
    console.log(todos);

    try {
      setLoading(true);

      const response = await axios.post('http://localhost:5000/todo/create', dataVal);

      console.log({response: response.data});

      await fetchTodo();

    } 
    catch (error) {
      console.log({ error: error.message });
    }
    finally {
      setLoading(false)
    }
  };
  
  return (
    <Container className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>

            <form onSubmit={handleSubmit}>
              <div className={classes.form} >
                <div className={classes.fields}>
                  <TextField 
                    className={classes.field}
                    onChange={handleChange}
                    // onChange={(e) => 
                    //   {console.log('TITLE LOGGEED', e.target.value),
                    //   setTodos(e.target.value)}}
                    type='text'
                    label='Title...'
                    name='title'
                    value={dataVal.title}
                    variant='outlined'              
                  />
                  <TextField 
                    className={classes.field}
                    onChange={handleChange}
                    type='text'
                    value={dataVal.about}
                    label='About...'
                    name='about'
                    variant='outlined'
                  />
                </div>
                
                <Button
                  type='submit'
                  className={classes.addBtn}
                  variant='outlined'
                >
                  <AddOutlinedIcon/>
                </Button>

              </div>
            </form>

          {/* NO-TASK CONTAINER */}
          { todos.length === 0 &&
            <div className={classes.notask}>
              <p className={classes.notaskText}>No tasks</p>
            </div>
          }

            <GetTodos loading={loading}/>

          </CardContent>

          
        </Card>
    </Container>
  )
}

export default PostTodo