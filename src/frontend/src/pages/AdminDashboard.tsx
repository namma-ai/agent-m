import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleEnrollOrganization = () => {
    navigate('/enroll-organization');
  };

  return (
    <Container maxWidth="lg" className="mt-10">
      <div className="p-8 bg-gray-900 rounded-lg shadow-lg text-center">
        <Typography variant="h2" gutterBottom align="center" className="text-white text-3xl font-bold mb-6">
          Admin Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom align="center" className="text-gray-400 mb-6">
          Welcome, Admin! You can manage organizations here.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleEnrollOrganization}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
        >
          Enroll Organization
        </Button>
      </div>
    </Container>
  );
};