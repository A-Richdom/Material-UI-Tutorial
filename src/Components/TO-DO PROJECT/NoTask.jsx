import { Card, CardContent, Container, Input, TextField, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  card: {
    backgroundColor: '#1b1a17',
    width: '350px',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    
  },
  field: {
    // display: 'block',
    width: '270px',
    height: '10px',
    
    
  }
  
}))

const NoTask = () => {
  const classes = useStyles()
  
  return (
    <Container className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent>

            <form className={classes.form}>
              <TextField 
                className={classes.field}
                label='Title'
                name='title'
                variant='outlined'
                required
               
              />

            </form>
          </CardContent>
        </Card>
    </Container>
  )
}

export default NoTask