import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, makeStyles } from '@material-ui/core';
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
    },
    title: {
        padding: theme.spacing(2, 2.5)
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar
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
        {/* App Bar */}
        <AppBar className={classes.appbar}>
            <Toolbar>
                Welcome to Material Tutorial
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{ paper: classes.drawerPaper }}
        >
            <div><Typography variant='h5' className={classes.title}>
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
            <div className={classes.toolbar}></div>
            <Outlet />
        </div>
        
    </div>
  )
};

export default LayOut