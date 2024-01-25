import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import NoteCard from './MuiCard';

const useStyles = makeStyles((theme) => ({
    gettingMui: {
        backgroundColor: theme.palette.secondary.light,
        fontFamily: 'QuickSand',
        fontWeight: theme.typography.fontWeightBold,
        padding: theme.spacing(2, 5),
        margin: theme.spacing(5, 6),
        borderRadius: '20px'
    }
 }));


const GetMuis = () => {
    const classes = useStyles()

    const [muis, setMuis] = useState([])
    useEffect(() => {
     getData()
    }, [])
    

    async function getData() {

        try {
            const res = await axios.get('http://localhost:5000/mui/getAll')

            setMuis(res.data)
        } 
        catch (error) {
            console.log({error: error.message});
        }   
    };
    console.log(muis);

  return (
    <main>
        {/* <Container>
            {muis.map((mui, i) => (
                <section className={classes.gettingMui} key={i}>
                    <h1>{mui.title}</h1>
                    <typography>{mui.details}</typography>
                    <p>{mui._id}</p>
                </section>
            ))}
        </Container> */}
        <Grid container>
            {muis.map((mui, i) => (
                <Grid item className={classes.gettingMui} key={i} xs={12} md={6} lg={3}>
                    {/* <Paper>{mui.title}</Paper> */}
                    <NoteCard mui={mui}/>
                </Grid>
            ))}
        </Grid>
        
    </main>
  )
};

export default GetMuis