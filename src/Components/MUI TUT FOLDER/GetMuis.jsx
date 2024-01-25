import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import MuiCard from './MuiCard';

const useStyles = makeStyles((theme) => ({
    gettingMui: {
        backgroundColor: theme.palette.secondary.main,
        // color: theme.palette.secondary.dark,
        fontFamily: 'QuickSand',
        fontWeight: theme.typography.fontWeightBold,
        padding: theme.spacing(5, 5),
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
    
//FETCHING MUI
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

//DELETE MUI
    async function handleDelete(id) {

        try {
            const res = await axios.delete(`http://localhost:5000/mui/delete${id}`)

            setMuis(res.data)
        } 
        catch (error) {
            console.log({error: error.message});
        }
    };

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
                    <MuiCard mui={mui} handleDelete={handleDelete}/>
                </Grid>
            ))}
        </Grid>
        
    </main>
  )
};

export default GetMuis