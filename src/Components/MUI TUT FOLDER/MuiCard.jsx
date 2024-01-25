import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography} from '@material-ui/core';
import DeleteOutlinedIcon from  '@mui/icons-material/DeleteOutlined';


const MuiCard = ({mui, handleDelete}) => {
  return (
    <div> 
       
        <Card>
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