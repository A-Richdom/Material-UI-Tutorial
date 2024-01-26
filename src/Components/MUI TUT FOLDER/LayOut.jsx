import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';



const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    outletPage: {
        // backgroundColor: 'grey',
        width: '100%',
    
    },
    drawer: {
        width: drawerWidth,
        // backgroundColor: theme.palette.primary.light,
    },
    drawerPaper: {
        width: drawerWidth,
        boxSizing: 'border-box',
        // backgroundColor: 'Pink',
    },
    active: {
        backgroundColor: 'pink  '
    }
}));

const LayOut = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My MUI',
            icon: <SubjectOutlinedIcon color='secondary'/>,
            path: '/getAll'
        },
        {
            text: 'Create MUI',
            icon: <AddCircleOutlineOutlinedIcon color='secondary'/>,
            path: '/mui'
        }
    ]

  return (
    <div className={classes.root}>
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{ paper: classes.drawerPaper }}
        >
            <div><Typography variant='h5'>
                    MUI TUT NOTE
                </Typography>
            </div>

            {/* List and Link */}
            <List>
                {menuItems.map((item, i) => (
                    <ListItem key={i} 
                              button
                              onClick={() => navigate(item.path)}
                              className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon >{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                ))}
            </List>

        </Drawer>

        <div className={classes.outletPage}>
            <Outlet />
        </div>
        
    </div>
  )
};

export default LayOut