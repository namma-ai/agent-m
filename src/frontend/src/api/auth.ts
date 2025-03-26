// import apiClient from './apiClient';

  // Mocked user data
const mockUsers = [
    {
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    },
    {
      email: 'org1@example.com',
      password: 'org123',
      role: 'organization',
    },
    {
      email: 'org2@example.com',
      password: 'org456',
      role: 'organization',
    },
  ];
  
  // Simulated login function
  export const login = async (email: string, password: string) => {
    //Api call
    // const response = await apiClient.post('/api/v1/auth/login', { email, password });
    // return response.data;

    // Find the user in the mock data
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
  
    if (!user) {
      throw new Error('Invalid email or password');
    }
  
    // Return a mocked token and role
    return {
      access_token: 'mocked-jwt-token', // Simulated JWT token
      role: user.role, // Role of the user
    };
  };