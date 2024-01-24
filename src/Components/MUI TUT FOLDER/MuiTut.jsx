import axios from 'axios'
import React, { useState } from 'react'
import { Typography, 
          Button, 
          ButtonGroup, 
          Container,
          TextField,
          RadioGroup,
          FormControlLabel,
          Radio,
          FormLabel,
          FormControl,
   
        
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
      backgroundColor: 'gray',
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
  marginBottom: 20,
  display: 'block'  
  }

}));


const MuiTut = () => {
  const classes = useStyles();

  const [muis, setMuis] = useState({})
  const [category, setCategory] = useState('todos')

  
  //HANDLE TEXT ONCHANGE
  function handleChange(e) {
    console.log(e.target.value);

    let key = e.target.name,
        val = e.target.value

    setMuis({...muis, [key]: val });
  };
  
  //HANDLE RADIO ONCHANGE
  function handleRadioChange(e) {
    console.log(e.target.value);

    setCategory(e.target.value)
  };


  // HANDLE SUBMIT
  async function handleSubmit(e) {
    e.preventDefault()

    const dataToSend = {...muis, category}
    console.log(dataToSend);

    try {
      const response = await axios.post('http://localhost:5000/mui/create', dataToSend)
        
      console.log({response: response.data});
    } 
    catch (error) {
      console.log({error: error.message});
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


        <AcUnitIcon fontSize  ='large' color='secondary'/>  
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
            onChange={handleChange}
            // onChange={(e) => 
            //   {console.log('Title changed', e.target.value),
            //   setTitle(e.target.value)}}
            label='Title'
            name='title'
            variant='outlined'
            // color='secondary'
            fullWidth
            required
            
          />

          <TextField className={classes.field}
            onChange={handleChange}
            // onChange={(e) => {setDetails(e.target.value)}}
            label='Details'
            name='details'
            variant='outlined'
            color='secondary'
            multiline
            rows={4}
            fullWidth
            required
            
          />

          <FormControl>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup 

              name='category'
              value={category} 
              onChange={handleRadioChange}
              // onChange={(e) => { setCategory(e.target.value)}} 
            >
              <FormControlLabel value="money" control={<Radio/>} label="Money" />
              <FormControlLabel value="todos" control={<Radio/>} label="Todos" />
              <FormControlLabel value="reminder" control={<Radio/>} label="Reminder"/>
            </RadioGroup>
          </FormControl>

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