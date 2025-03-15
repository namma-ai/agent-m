import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" sx={{ marginBottom: '20px' }}>
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Namma-AI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        {children}
      </Container>

      {/* Footer (Optional) */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          padding: '10px',
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <Typography variant="body1">© 2025 Namma-AI. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Layout;