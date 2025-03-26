import apiClient from './apiClient';

export const enrollOrganization = async (data: { name: string; description: string }) => {
  const response = await apiClient.post('/api/v1/organizations', data);
  return response.data;
};