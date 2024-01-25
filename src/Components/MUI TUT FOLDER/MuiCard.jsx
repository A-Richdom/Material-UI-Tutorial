import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton} from '@material-ui/core';
import DeleteOutlinedIcon from  '@mui/icons-material/DeleteOutlined';
const MuiCard = ({mui}) => {
  return (
    <div>
        <Card>
            <CardHeader 
                action={
                <IconButton>
                  <DeleteOutlinedIcon />
                </IconButton>
                }
                title={mui.title}
                subheader={mui.category}
            />
            
        </Card>
    </div>
  )
}

export default MuiCard