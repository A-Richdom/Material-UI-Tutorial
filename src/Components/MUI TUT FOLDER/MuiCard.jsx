import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography, makeStyles} from '@material-ui/core';
import DeleteOutlinedIcon from  '@mui/icons-material/DeleteOutlined';
import { blue, green, pink, red } from '@material-ui/core/colors';


const useStyles = makeStyles(() => ({
  test: {
    border: (mui) => {
      if (mui.category === 'money') {
        return '6px solid blue'
      }
      return '6px solid black'
    }
  },
  avatar: {
   backgroundColor: (mui) => {
    if (mui.category === 'money') {
      return blue[700]
    }
    if (mui.category === 'todos') {
      return red[700]
    }
    return green[700]
   }
  }  
}));


const MuiCard = ({mui, handleDelete}) => {
const classes = useStyles(mui)

// useEffect(() => {
//   if (!mui || !mui.category) {
    
//   }
// }, [mui])


// if (!mui || !mui.category) {
//   return null  
// }
  return (
    <div> 
       
        <Card className={classes.test}>
            <CardHeader 
                avatar={
                  <Avatar className={classes.avatar}>
                    {mui.category[0].toUpperCase()}
                  </Avatar>
                }
                action={
                <IconButton onClick={() => handleDelete(mui._id)}>
                  <DeleteOutlinedIcon />
                </IconButton>
                }
    
                title={
                  <Typography variant='h5'>
                    {mui.title}
                  </Typography>
                }
                subheader={mui.category}
            />
            <CardContent>
              <Typography variant='body2'>{mui.details}</Typography>
              <small>{mui._id}</small>
            </CardContent>
            
        </Card>
    </div>
  )
}

export default MuiCard