import { Button, Card, CardContent, Container, TextField, makeStyles } from '@material-ui/core'
import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  card: {
    backgroundColor: '#1b1a17',
    width: '390px',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    
  },
  cardContent: {
    padding:'30px 60px',
  },
    form: {
    width: '100%', 
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
  
  },
  field: {
    color: 'white',
    width: '270px',
    // height: '40px',
    fontFamily: theme.typography.fontFamily,
    marginBottom: '16px',
    '& .MuiOutlinedInput-input': {
        color: 'white',
        height: '5px',
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
  addBtn: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontWeightRegular,
    border: '2px solid #ff8303',
    height: '90px',
    borderRadius: '7px',
    color: 'white',
    marginBottom: '16px',
  },
  
}));

const TodoProject = () => {
  const classes = useStyles()
  
  return (
    <Container className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>

            <form>
              <div className={classes.form}>
                <div className={classes.fields}>
                  <TextField 
                    className={classes.field}
                    label='Title...'
                    name='title'
                    variant='outlined'              
                  />
                  <TextField 
                    className={classes.field}
                    label='About...'
                    name='about'
                    variant='outlined'
                  />
                </div>
                <Button
                  className={classes.addBtn}
                  variant='outlined'
                >
                  <AddOutlinedIcon/>
                </Button>

              </div>
            </form>

          </CardContent>

          
        </Card>
    </Container>
  )
}

export default TodoProject