import React, { useState } from 'react'
import { Typography, 
          Button, 
          ButtonGroup, 
          Container,
          TextField,

         
        
        } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles((theme) => ({
  LoremTypo: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '20px',
    fontFamily: 'Quicksand',
    fontWeight: theme.typography.fontWeightRegular,    
    '&:hover': {
      backgroundColor: 'lightBlue',
    },
  },
  CreateTypo: {
    color: 'red',
    fontWeight: 'bolder'
  },
  btn: {
    backgroundColor: 'blue',
    fontSize: '20px',
    marginTop: 20,
    '&:hover': {
      // backgroundColor: 'gray',
      color: 'black'
    }
  },
  form: {
    border: '2px solid gray',
    borderRadius: 20,
    padding: theme.spacing(2, 10),
  },
  field: {
  // '& .MuiOutlinedInput-input': {
  //   color: theme.palette.secondary.main
  // },
  // '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
  //   borderColor: theme.palette.secondary.dark, 
  // },
  // '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
  //   borderColor: 'blue', 
  // },
  // '& .Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
  //   borderColor: 'yellow', 
  // },
  marginTop: 20,
  marginButtom: 20,
  display: 'block'  
  }

}));


const MuiTut = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }

    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details);
    }


  };


  return (
    <Container>
        <Typography className={classes.CreateTypo} variant='h5'>
            Create a new Note
        </Typography>

        <Typography className={classes.LoremTypo} variant='h5' noWrap  >
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam sequi eaque cupiditate rerum, nulla aliquam, perferendis quisquam temporibus eligendi ipsa nisi earum, officiis exercitationem. Beatae eos expedita odio quis.
        </Typography>

        
         <br /> <br />


        <AcUnitIcon fontSize='large' color='secondary'/>  
        <AcUnitIcon fontSize='medium'/>  
        <AcUnitIcon fontSize='small'/>  
        <AcUnitIcon/>  
        <br /> <br />


        <ButtonGroup variant='contained' color='error'>
          <Button className={classes.btn}>ONE</Button>
          <Button>TWO</Button>
          <Button>THREE</Button>
        </ButtonGroup>

        <form className={classes.form} onSubmit={handleSubmit} > <br />
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label='Title'
            variant='outlined'
            color='secondary'
            fullWidth
            required
            error={titleError}
            
          />

          <TextField className={classes.field}
            onChange={(e) => setDetails(e.target.value)}
            label='Details'
            variant='outlined'
            color='secondary'
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
            
          />

            <Button 
              className={classes.btn}
              variant='outlined' 
              type='submit' 
              color='secondary'
              endIcon={<ArrowForwardIcon/>}>
              
                Submit

            </Button>
        </form>
    </Container>
  )
};

export default MuiTut