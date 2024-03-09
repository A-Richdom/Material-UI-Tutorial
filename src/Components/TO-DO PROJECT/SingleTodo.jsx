import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { todoApi } from './HOOKS/todoApi';
import { Button, Card, CardContent, Container, Typography, makeStyles } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';



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
  expandedCard: {
    height: '50vh',
  },
  cardContent: {
    padding:'30px 60px',
  },
  sectionContent: {
    width: '320px',
    height: '70px',
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
    marginBottom: '100px',
    
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

const SingleTodo = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(null);
  const [shareIconsVisibility, setShareIconsVisibility] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const { iconsWrapperVisible, setIconsWrapperVisible,  handleDelete, handleEdit, handleInfo, todos } = todoApi();

  //HANDLE ICONs BUTTON FUNCTION...//
  function handleIconsBtn(index) {
    setIconsWrapperVisible((prevState) => (prevState === index ? null : index))
    setCurrentIndex(index)

    console.log(setCurrentIndex(index));
  };

  //HANDLE SHARE FUNCTION...//
  function handleShare(index) {
    setShareIconsVisibility((prevState) => (prevState === index ? null : index));
    setExpanded((prevState) => !prevState);
  };


  console.log(todos,';meeeee');

   //GET SINGLE TODO.....x
   useEffect(() => {
    handleInfo(id);
  }, [id]);

  if(todos.data)

  return (
    
    <div className={classes.cardContainer}>
      {/* <p>{todos.data.title}</p> */}
      < Card className={`${classes.card} ${expanded ? classes.expandedCard: ''}`}>
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
                      onClick={() => handleShare(todos?.data?._id)}
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

              {/* SHARE ICONs DROP-DOWN */}
              {shareIconsVisibility !== null && shareIconsVisibility === currentIndex && (
                  <Container>
                    <div className={classes.shareIcons} >
                      <WhatsAppIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                      <FacebookOutlinedIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                      <XIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                      <GoogleIcon className={classes.icon} style={{ fontSize: '12px' }}/>
                    </div>
                  </Container>   
              )};
        </CardContent>
      </Card>

    </div>
  )
};

export default SingleTodo