import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, Container, Typography } from '@mui/material';
import { useAuthStore } from '../store/authStore';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const { setToken, setRole } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await login(data.email, data.password);
  
      // Save token and role to Zustand store (automatically persisted)
      setToken(response.access_token);
      setRole(response.role);
  
      alert(`Login successful! Role: ${response.role}`);
  
      // Redirect based on role
      if (response.role === 'admin') {
        navigate('/admin-dashboard', { replace: true });
      } else {
        navigate('/organization-dashboard', { replace: true });
      }
    } catch (error) {
      alert(error || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm" className="mt-10">
      <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
        <Typography variant="h2" gutterBottom align="center" className="text-white text-3xl font-bold mb-6">
          Welcome to Namma-AI
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={`w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className={`w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};