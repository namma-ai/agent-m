import apiClient from './apiClient';

export const inviteUser = async (email: string) => {
  const response = await apiClient.post('/api/v1/users/invite', { email });
  return response.data;
};