import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const schema = Yup.object().shape({
  name: Yup.string().required('Organization name is required'),
  description: Yup.string().required('Description is required'),
});

export const EnrollOrganizationPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: { name: string; description: string }) => {
    console.log(data);
    alert('Organization enrolled successfully!');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: '50px',
          padding: '30px',
          backgroundColor: 'background.paper',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h2" gutterBottom align="center">
          Enroll Your Organization
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Organization Name"
            fullWidth
            margin="normal"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '6px' }}
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            {...register('description')}
            error={!!errors.description}
            helperText={errors.description?.message}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '6px' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
            Enroll
          </Button>
        </form>
      </Box>
    </Container>
  );
};