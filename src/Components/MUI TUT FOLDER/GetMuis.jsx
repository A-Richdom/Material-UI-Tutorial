import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, makeStyles } from '@material-ui/core'

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
     
           const res = await axios.get('http://localhost:5000/mui/getAll')

           setMuis(res.data)

    };
    console.log(muis);

  return (
    <main>
        <Container>
            {muis.map((mui, i) => (
                <section className={classes.gettingMui} key={i}>
                    <h1>{mui.title}</h1>
                    <typography>{mui.details}</typography>
                    <p>{mui._id}</p>
                </section>
            ))}
        </Container>
        
    </main>
  )
};

export default GetMuis