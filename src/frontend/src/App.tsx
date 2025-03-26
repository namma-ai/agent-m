import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;