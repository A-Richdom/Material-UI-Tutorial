import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { todoApi } from './HOOKS/todoApi';
import { Button, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



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
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '20px'
  },
  cardContent: {
    padding:'30px 60px',
  },
  divContainer: {
    height: '180px',
    overflow: 'auto',
    overflowX: 'hidden',
    marginTop: '30px',
    color: 'black'
  },
  loadingDiv: {
    color: 'black',
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
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(null);
  const { iconsWrapperVisible, setIconsWrapperVisible, handleDelete, handleEdit, handleInfo, todos } = todoApi();

  console.log(currentIndex);

  function handleIconsBtn(index) {
    setIconsWrapperVisible((prevState) => (prevState === index ? null : index))
    setCurrentIndex(index)

    console.log(setCurrentIndex(index));
  };

  console.log(todos,';mee');

   //GET SINGLE TODO.....
   useEffect(() => {
    handleInfo(id);
  }, [id]);

  if(todos.data)

  return (
    <div className={classes.cardContainer}>
      {/* <p>{todos.data.title}</p> */}
      < Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.sectionContent}>
                  <div className={classes.textContent}>
                    <Typography  className={classes.typo}>{todos?.data?.title}</Typography>
                    <Typography className={classes.lastTypo}>{todos?.data?.about}</Typography>

                    {/* <small>{todos?.data?._id}</small>/ */}
                  </div>

                  {/* BTNS ICONS WRAPPERS */}
                  <Button className={classes.btnContent} variant='outlined' onClick={() => handleIconsBtn(todos?.data?._id)}>
                    <div className={classes.iconWrapper}>
                      <ClearIcon style={{ fontSize: '15px' }} className={classes.iconContent}/>
                    </div>
                  </Button>
          </div>

                
                {/* ICONs BTN DROP-DOWN */}
                {iconsWrapperVisible !== null && iconsWrapperVisible === todos?.data?._id && (
                  <div className={classes.iconsWrapper}>
                    <ShareRoundedIcon 
                      style={{ fontSize: '16px' }} 
                      className={classes.buttonIconStyle}
                      onClick={() =>{console.log('clicked')}}
                    />
                    <InfoOutlinedIcon 
                      style={{ fontSize: '16px' }} 
                      className={classes.buttonIconStyle}
                      onClick={() =>  handleInfo(todos?.data?._id)}
                    />
                    <DeleteForeverIcon 
                      style={{ fontSize: '16px' }} 
                      className={classes.buttonIconStyle}
                      onClick={() => handleDelete(todos?.data?._id)}
                    />
                    <EditIcon  
                      style={{ fontSize: '16px' }} 
                      className={classes.buttonIconStyle}
                      onClick={() => handleEdit}
                    />
                  </div>

              )};
        </CardContent>
      </Card>

    </div>
  )
};

export default SingleTodo