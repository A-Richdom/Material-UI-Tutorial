import { Button, ButtonGroup, Card, CardContent, Container, TextField, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { todoApi } from './HOOKS/todoApi';


const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
   
  },
  card: {
    backgroundColor: '#1f1e1b',
    width: '335px',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '20px'
  },
  cardContent: {
    padding:'20px 0px',
  },
   
  divContainer: {
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '28%',
  },
  titleField: {
    color: 'white',
    width: '300px',
    
    fontFamily: theme.typography.fontFamily,
    marginBottom: '16px',
    '& .MuiOutlinedInput-input': {
        color: 'white',
        height: '10px',
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
  aboutField: {
    color: 'white',
    width: '300px',
    
    fontFamily: theme.typography.fontFamily,
    marginBottom: '16px',
    '& .MuiOutlinedInput-input': {
        color: 'white',
        height: '50px',
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
  btnsWrapper: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
}));

const UpdateTodo = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { initialDetails, dataVal, setDataVal, loading, setLoading, fetchTodo } = todoApi();

  //UPDATE TO-DO...//

  return (
    <Container className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {/* //UPDATE CONTAINER// */}
        
          <div className={classes.divContainer}>
            <TextField
              className={classes.titleField}
              // onChange={handleChange}
              type='text'
              label='Title...'
              name='title'
              value={dataVal.title}
              variant='outlined'     
            />

            <TextField
              className={classes.aboutField}
              // onChange={handleChange}
              label='About...'
              name='about'
              value={dataVal.about}
              variant='outlined' 
            />

            <div className={classes.btnsWrapper}>
              <Button 
                className={classes.btns}
                variant='outlined'
                onClick={() => handleSave(i)}
              >
                Save
              </Button>
              <Button 
                className={classes.btns}
                variant='outlined'
                onClick={() => handleCancel(i)}
              >
                Cancel
              </Button>
            </div>  

          </div>

        </CardContent>
      </Card>
    </Container>
  )
}

export default UpdateTodo