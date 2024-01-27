import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography, makeStyles} from '@material-ui/core';
import DeleteOutlinedIcon from  '@mui/icons-material/DeleteOutlined';


const useStyles = makeStyles({
  test: {
    border: (mui) => {
      if (mui.category == 'money') {
        return '6px solid blue'
      }
      return '6px solid black'
    }
  }
});

const MuiCard = ({mui, handleDelete}) => {
const classes = useStyles(mui)
  return (
    <div> 
       
        <Card className={classes.test}>
            <CardHeader 
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