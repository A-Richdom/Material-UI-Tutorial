import * as React from 'react';
import ToDoApp from './Components/ToDoApp'
import { Route } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MuiTut from './Components/MUI TUT FOLDER/MuiTut';
import { createTheme, useTheme, ThemeProvider, colors } from '@material-ui/core';
import { purple } from '@mui/material/colors';
import { indigo, teal } from '@material-ui/core/colors';
import GetMuis from './Components/MUI TUT FOLDER/GetMuis';
import LayOut from './Components/MUI TUT FOLDER/LayOut';
import PostTodo from './Components/TO-DO PROJECT/PostTodo';
import GetTodos from './Components/TO-DO PROJECT/GetTodos';
import GetTodosOutlet from './Components/TO-DO PROJECT/GetTodosOutlet';
import SingleTodo from './Components/TO-DO PROJECT/SingleTodo';
import UpdateTodo from './Components/TO-DO PROJECT/UpdateTodo';



const router = createBrowserRouter([

  { path: 'todo', element: <ToDoApp />},

  { path: 'postTodo', element: <PostTodo />},

  { path: 'updateTodo', element: <UpdateTodo />},

  {
    path: '/getTodos',
    element: <GetTodosOutlet />,
    children: [
      {
        index: true,
        element: <GetTodos />
      },
      {
        path: ':id',
        element: <SingleTodo />,
      }
    ]
  },

  { path: '/', element: <LayOut />,

    children: [
      { path: 'mui', element: <MuiTut />},

      { path: 'getAll', element: <GetMuis/>}
    ]
  
  }

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
    body2: {
      color: teal[500],
    },
    h5: {
      color: teal[700]
    }
    
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