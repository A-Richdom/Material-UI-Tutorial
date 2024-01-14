import * as React from 'react';
import ToDoApp from './Components/ToDoApp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MuiTut from './Components/MUI TUT FOLDER/MuiTut';
import { createTheme, useTheme, ThemeProvider, colors } from '@material-ui/core';
import { purple } from '@mui/material/colors';
import { teal } from '@material-ui/core/colors';


const router = createBrowserRouter([

  { path: 'todo', element: <ToDoApp />},

  { path: 'mui', element: <MuiTut />}
]);

const theme = createTheme({
  palette: {
    secondary:purple,
    primary: teal,
  },

  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '600',
  }
});

// main//
function App() {
  // const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>

    <>
      <RouterProvider router={router} />
    </>
    
    </ThemeProvider>

  )
};

export default App