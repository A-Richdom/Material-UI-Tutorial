import { Card, Container, Input, makeStyles } from '@material-ui/core'
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
  
}))

const NoTask = () => {
  const classes = useStyles()
  
  return (
    <Container className={classes.cardContainer}>
        <Card className={classes.card}>
          <form className={classes.form}>
            <Input />

          </form>

        </Card>
    </Container>
  )
}

export default NoTask