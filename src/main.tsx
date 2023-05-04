import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '../styles/GlobalStyle';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
