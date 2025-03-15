import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode for a futuristic look
    primary: {
      main: '#673AB7', // Deep purple for buttons and highlights
    },
    secondary: {
      main: '#03DAC5', // Teal for accents
    },
    background: {
      default: '#121212', // Dark gray background
      paper: '#1E1E1E',   // Slightly lighter for cards and surfaces
    },
    text: {
      primary: '#FFFFFF', // White text for contrast
      secondary: '#B0BEC5', // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Modern font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#B0BEC5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Remove uppercase transformation
          borderRadius: '8px', // Rounded corners
          padding: '10px 20px', // Spacing inside buttons
        },
      },
    },
  },
});

export default theme;