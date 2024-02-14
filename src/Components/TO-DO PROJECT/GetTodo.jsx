import { Card, CardContent, CardHeader, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';


const useStyles = makeStyles((theme) => ({
  divContainer: {
    height: '160px',
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
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  typo: {
    fontSize: '1.5rem',
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
    padding: '8px'

  },
  iconsWrapper: {
    display: 'flex',  
    gap: '6px',
    justifyContent: 'flex-end',
    paddingTop: '6px',
    paddingBottom: '15px',
  },
  buttonIconStyle: {
    color: 'whitesmoke',
    border: '1px solid #ff8303',
    borderRadius: '4px',
    padding: '8px',
    cursor: 'pointer'

  }

  
}));

const GetTodo = () => {
  const classes = useStyles()
  const [todos, setTodos] = useState([]);
  const [iconsWrapperVisible, setIconsWrapperVisible] = useState(null);

useEffect(() => {
  getTodo()
}, [])

  async function getTodo() {

    try {
      const response = await axios.get('http://localhost:5000/todo/getAll')
      const todosData = response.data.data.map(todo => ({ ...todo, iconsWrapperVisible: false }));
      setTodos(todosData);
      console.log('Response from API:', response.data);
    } 
    catch (error) {
      console.log({ error: error.message });
    }
  };

  function handleBtnContent(index) {
    setIconsWrapperVisible((prevState) => (prevState === index ? null : index))
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
                    <ClearIcon style={{ fontSize: '15px' }} className={classes.iconContent}/>
                  </div>
                </Button>

              </div>

              {/* DROP-DOWN BTNS */}
              {iconsWrapperVisible !== null && iconsWrapperVisible === i && (
                <div className={classes.iconsWrapper}>
                <ShareRoundedIcon style={{ fontSize: '16px' }} className={classes.buttonIconStyle}/>
                <InfoOutlinedIcon style={{ fontSize: '16px' }} className={classes.buttonIconStyle}/>
                <EditIcon style={{ fontSize: '16px' }} className={classes.buttonIconStyle}/>
              </div>
              )}
            
            </section> 
          ))}
        
      </div>
      
    </main>
  )
}

export default GetTodo