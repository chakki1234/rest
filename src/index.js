import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    footer: {
      fontSize: '10px',
      fontWeight: 500,
      fontFamily: 'Cormorant Garamond, serif',
      color: '#7a413b',
      fontStyle: 'italic'
    },
    banner: {
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: 'Cormorant Garamond, serif',
      color: '#7a413b',
      fontStyle: 'italic'
    },
    paragraphHeading: {
      fontSize: '30px',
      fontWeight: 700,
      fontFamily: 'Cormorant Garamond, serif',
      color: '#7a413b',
      fontStyle: 'italic'
    },
    paragraphContent: {
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: 'Roboto, serif',
      color: '#322C2B'
    }
  },
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
