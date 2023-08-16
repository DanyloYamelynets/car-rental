import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64c234deeb7fd5d6ebcf6bdf.mockapi.io',
});

export const catalogRequest = async () => {
  const { data } = await instance.get('/adverts');
  return data;
};
