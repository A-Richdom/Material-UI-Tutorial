import React from 'react'
import Box from "@mui/material/Box";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, createTheme, styled, colors, ThemeProvider, useTheme } from '@mui/material';
import AcUnitIcon from '@material-ui/icons/AcUnit';

// import { orange } from '@mui/material/colors';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
    
//   </Box>
// );
  
const Content = styled(Container)(({theme})=>({
  display:'flex',alignItems:'center',justifyContent:'center', height:"100vh",width:'100%',backgroundColor:theme.palette.primary.main
}))

const MainContent = styled(Card)(({theme})=>({
  width: 350, height:'90vh',  border:'2px solid red',  display:"flex",flexDirection:'column',justifyContent:"center"
}))

const theme = createTheme({
  status: {
    danger: '#e91e63',
  },
  palette: {
    secondary: {
      main: colors.yellow[800],
      dark:colors.yellow[300],
      light:colors.yellow[50],
      contrastText:colors.yellow[50],
    },
    primary:{
      main:colors.cyan[100],
      dark:colors.yellow[300],
      light:colors.yellow[50],
      contrastText:colors.yellow[300],
    }
  },
  
  typography:{
    fontFamily:"",
    fontWeightBold:"700",
    fontWeightLight:"100",
    h1:{
      fontSize:50,
      
    }
  }
})

const ToDoApp = () => {
  const theme = useTheme()
  
  return (
    <ThemeProvider theme={theme}>

      <div>
        <Box sx={{
          border: "5px solid blue",
          height: "300px",
          width: {
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: 'secondary.main'
        }}>
        </Box>


          <Content >
          <MainContent>
            <CardContent>
              {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography> */}
              <Box sx={{marginBottom: 42}}>
                    <TextField color='secondary' sx={{ width: 250, marginBottom: 1, }}  label="Title..." size='small' variant="outlined" > </TextField>

                    <TextField color='primary' sx={{ width: 250}}  label="Description..." size='small' variant="outlined" > </TextField>
              </Box>
          

              <AcUnitIcon/>

              <Typography variant="h1" fontWeight={'light'} fontSize={2} >
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> 
              
            </CardContent>

            <CardActions>
              <Button  size="small">Learn More</Button>
              <Button variant="contained">Contained</Button>
            </CardActions>
          </MainContent>
          </Content>

      </div>
    </ThemeProvider>
  )
}

export default ToDoApp