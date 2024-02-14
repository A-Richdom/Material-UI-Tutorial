import { Card, CardContent, CardHeader, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';


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
    fontSize: '10px',
  },
  iconContent: {
    fontSize: '10px',  // The icon size is not reducing 
    padding: '2px'

  },
  btnsWrapper: {
    display: 'flex',  
    gap: '10px',
    justifyContent: 'flex-end',
    paddingBottom: '20px',
 
    '& button': {
      color: 'whitesmoke',
      padding: '15px',
      border: '1px solid #ff8303',
      borderRadius: '10px',
      fontSize: '10px',
    },
  },
  buttonIconStyle: {
    fontSize: '12px', // The icon size is not reducing
  }

  
}));

const GetTodo = () => {
  const classes = useStyles()
  const [todos, setTodos] = useState([]);
  const [btnsVisible, setbtnsVisible] = useState(false)

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

  function handleBtnContent() {
    setbtnsVisible(true)
  };

  return (
    <main>

      <div className={classes.divContainer}>
        
          {todos.map((todo, i) => (
            <section key={i} >

              <div className={classes.sectionContent}>
                <div className={classes.textContent}>
                  <Typography  className={classes.typo}>{todo.title}</Typography>
                  <Typography variant='body1' className={classes.lastTypo}>{todo.about}</Typography>
                </div>

                <Button
                  className={classes.btnContent}
                  variant='outlined'
                  onClick={() => handleBtnContent(i)}
                >
                  <div className={classes.iconWrapper}>
                    <ClearIcon className={classes.iconContent}/>
                  </div>
                </Button>

              </div>

              {/* DROP-DOWN BTNS */}
            
            { todo.btnsVisible &&
            <div className={classes.btnsWrapper}>
            <Button><ShareRoundedIcon className={classes.buttonIconStyle}/></Button>
            <Button><InfoOutlinedIcon className={classes.buttonIconStyle}/></Button>
            <Button><EditIcon className={classes.buttonIconStyle}/></Button>
          </div>
            }
              
              
            </section> 
          ))}
        
      </div>
      
    </main>
  )
  }

export default GetTodo