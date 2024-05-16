import { Typography, makeStyles, Button, Card, CardContent, Container } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { todoApi } from '../TO-DO PROJECT/HOOKS/todoApi';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import UpdateTodo from './UpdateTodo';


const useStyles = makeStyles((theme) => ({
  divContainer: {
    height: '170px',
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
    width: '295px',
    height: '70px',
    // minHeight: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #ff8303',
    borderRadius: '10px',
    padding: '0 0 0 20px',
    marginBottom: '10px',
    marginLeft: '4px',
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
  },
  shareIcons: {
    width: '55%',  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#242319',
    color: 'whitesmoke',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    backgroundColor: '#1b1a17',
    borderRadius: '50px',
    padding: '10px',
    cursor: 'pointer',
  },
}));

const GetTodo = ({reaction}) => {
  const classes = useStyles();
  const { id } = useParams();
  const [updateComponentVisible, setUpdateComponentVisible] = useState(null)
  const [shareIconsVisibility, setShareIconsVisibility] = useState(null);
  const navigate = useNavigate();

  const { 
    details,
    setDetails,
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
  }  = todoApi();


  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);
      
      setTimeout(async () => {
        await fetchTodo();  

        setLoading(false)
      }, 1000);
    };  
  fetchData();

  }, [id, reaction])

  //HANDLE ICONs BUTTON FUNCTION...//
  function handleIconsBtn(index) {
    setIconsWrapperVisible((prevState) => (prevState === index ? null : index))
  };

  //HANDLE EDIT FUNC...//
  function handleEdit(index) {
    setUpdateComponentVisible((prevState) => (prevState === index ? null : index))
  };
  //HANDLE SHARE FUNC...//
  function handleShare(index) {
    setShareIconsVisibility((prevState) => (prevState === index ? null : index))
  };

  return (
    <main>

      <div className={classes.divContainer}>
          {loading && 
            (<span className={classes.loadingDiv}>
              LOADING...
            </span>
          )}
        
          { todos.map((todo, i) => (
            <section key={todo._id} >

              <div className={classes.sectionContent}>
                <div className={classes.textContent}>
                  <Typography  className={classes.typo}>{todo.title}</Typography>
                  <Typography className={classes.lastTypo}>{todo.about}</Typography>
                </div>

                {/* BTNS ICONS WRAPPERS */}

                <Button className={classes.btnContent} variant='outlined' onClick={() => handleIconsBtn(i)}>
                  <div className={classes.iconWrapper}>
                    <ClearIcon style={{ fontSize: '15px' }} className={classes.iconContent}/>
                  </div>
                </Button>
              </div>

              
              {/* ICONs BTN DROP-DOWN */}
              {iconsWrapperVisible !== null && iconsWrapperVisible === i && (
                <div className={classes.iconsWrapper}>
                  <ShareRoundedIcon 
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() => handleShare(i)}
                  />
                  <InfoOutlinedIcon 
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() =>  navigate(`/getTodos/${todo._id}`)}
                  />
                  <DeleteForeverIcon 
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() => handleDelete(todo._id)}
                  />
                  <EditIcon  
                    style={{ fontSize: '16px' }} 
                    className={classes.buttonIconStyle}
                    onClick={() => handleEdit(i)}
                  />
                </div>

              )}

              {/* SHARE ICONs DROP-DOWN */}
              {shareIconsVisibility !== null && shareIconsVisibility === i && (
                  <Container>
                    <div className={classes.shareIcons}>
                      <WhatsAppIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                      <FacebookOutlinedIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                      <XIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                      <GoogleIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                    </div>
                  </Container>
              )};

              {/* CONDITIONALLY RENDER UPDATE COMPONENT */}
              { updateComponentVisible !== null &&  (
                <UpdateTodo />
              )};
            
            </section> 
            
          ))}

      </div>
      <div></div>
      
    </main>
  )

};

export default GetTodo;
