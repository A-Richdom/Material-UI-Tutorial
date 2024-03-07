import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { todoApi } from './HOOKS/todoApi';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  divContainer: {
    height: '180px',
    overflow: 'auto',
    overflowX: 'hidden',
    marginTop: '30px',
  },
  loadingDiv: {
    color: 'white',
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    justifyContent: 'space-around'
  },
  sectionContent: {
    width: '320px',
    height: '70px',
    // minHeight: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #ff8303',
    borderRadius: '10px',
    padding: '0 0 0 20px',
    marginBottom: '10px',
  },
  textContent: {
    display: 'flex',
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  typo: {
    fontSize: '1.5rem',
    color: 'whitesmoke',
    overflow: 'hidden',
    flexGrow: '1',
  },
  lastTypo: {
    display: 'flex',
    flexDirection: 'column',
    // width: '10px',
    flexWrap: 'wrap',
    color: 'whitesmoke',
    overflow: 'hidden',
    flexGrow: '1',
    textOverflow: 'ellipsis',
    paddingRight: '0px 30px 0px 0px',
    // whiteSpace: 'nowrap',
    // textAlign: 'center',
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

const SingleTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const classes = useStyles();

  const { iconsWrapperVisible, setIconsWrapperVisible, handleDelete, handleEdit, handleIconsBtn, handleInfo } = todoApi();

   //GET SINGLE TODO.....
   useEffect(() => {
    handleInfo();
  }, [id]);

  return (
    <div>
      <div className={classes.sectionContent}>
                <div className={classes.textContent}>
                  <Typography  className={classes.typo}>{todo.title}</Typography>
                  <Typography className={classes.lastTypo}>{todo.about}</Typography>

                  {/* <small>{todo._id}</small> */}
                </div>

                {/* BTNS ICONS WRAPPERS */}
                <Button className={classes.btnContent} variant='outlined' onClick={() => handleIconsBtn(i)}>
                  <div className={classes.iconWrapper}>
                    <ClearIcon style={{ fontSize: '15px' }} className={classes.iconContent}/>
                  </div>
                </Button>
              </div>

              
              {/* DROP-DOWN BTNS */}
              {iconsWrapperVisible !== null && iconsWrapperVisible === i && (
                <div className={classes.iconsWrapper}>
                  <ShareRoundedIcon 
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() =>{console.log('clicked')}}
                  />
                  <InfoOutlinedIcon 
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() =>  handleInfo(todo._id)}
                  />
                  <DeleteForeverIcon 
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() => handleDelete(todo._id)}
                  />
                  <EditIcon  
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() => handleEdit}
                  />
                </div>

              )}

    </div>
  )
}

export default SingleTodo