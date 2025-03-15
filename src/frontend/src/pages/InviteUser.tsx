import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import { inviteUser } from '../api/user';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const InviteUserPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: { email: string }) => {
    try {
      await inviteUser(data.email);
      alert('User invited successfully!');
    } catch (error) {
      alert('Failed to invite user');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Invite User</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Invite
        </Button>
      </form>
    </Container>
  );
};