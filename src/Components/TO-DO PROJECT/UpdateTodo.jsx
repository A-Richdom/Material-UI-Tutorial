import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Typography, TextField, Container, Card, CardContent } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { todoApi } from './HOOKS/todoApi';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    // alignItems: 'center',  
    // justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '43%',
    transform: 'translate(-9%, -20%)',
    width: 20,
    heigh: 20,
    // bgcolor: 'background.paper',
    backgroundColor: '1f1e1b',
    // backgroundColor: 'red',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // minHeight: '100vh',
   
  },
  card: {
    backgroundColor: '#1f1e1b',
    // backgroundColor: 'red',
    width: '335px',
    height: '45vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '20px'
  },
  cardContent: {
    padding:'20px 0px',
  },
   
  divContainer: {
    // backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '28%',
    // marginBottom: '20px',
  },
  titleField: {
    color: 'white',
    width: '300px',
    marginBottom: '60px',
    
    fontFamily: theme.typography.fontFamily,
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
      borderColor: '#ff8303',
    },
  },
  aboutField: {
    color: 'white',
    width: '300px',
    marginTop: '20px', 
    fontFamily: theme.typography.fontFamily,
    // marginBottom: '16px',
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
    '& .Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline' : {
      borderWidth: '2px', // Ensure the border width is consistent
      borderColor: '#ff8303',
      color: 'whitesmoke',   
    },
  },
  btnsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '170%',
  },
  btns: {
    fontSize: '10px',
    color: 'whitesmoke',
    border: '1px solid #ff8303',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
}));


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 200,
//   heigh: 50,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function TransitionsModal() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { dataVal, setDataVal, handleSave, } = todoApi();

  //HANDLE CHANGE FUNCTION .....//
  function handleChange(e) {
    console.log(e.target.value);

    const { name, value } = e.target;

    setDataVal((prevState) => ({...prevState, [name]: value }));
  };

  //HANDLE SAVE UPDATED TODO...//
    

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
        <Container className={classes.cardContainer}>
       <Card className={classes.card}>
         <CardContent className={classes.cardContent}>
          
          {/* //UPDATE CONTAINER// */}
        
          
            <div className={classes.divContainer}>
          <TextField
          id="transition-modal-title"
              className={classes.titleField  }
             onChange={handleChange}
              type='text'
               label='Title...'
              name='title'
              // value={dataVal.title}
               variant='outlined'     
             />

             <TextField
             id="transition-modal-description"
            //  style={{ marginBottom: '15px' }}
              className={classes.aboutField}
              onChange={handleChange}   
              label='About...'
               name='about'
              //  value={dataVal.about}
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
             // onClick={() => handleCancel(i)}
           >
               Cancel
               </Button>
             </div>  
            
            </div>
          

          //         </CardContent>
          //       </Card>
          //     </Container>
        </Fade>
      </Modal>
    </div>
  );
}
