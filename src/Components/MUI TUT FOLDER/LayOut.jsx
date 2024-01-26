import { Drawer, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { Outlet } from 'react-router-dom'

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
        backgroundColor: 'Pink',
    },

}));

const LayOut = () => {
    const classes = useStyles()

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

        </Drawer>

        <div className={classes.outletPage}>
            <Outlet />
        </div>
        
    </div>
  )
}

export default LayOut