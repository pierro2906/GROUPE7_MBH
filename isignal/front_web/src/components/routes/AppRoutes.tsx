import { useRoutes } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { guestRoutes } from './guestRoutes';

export const AppRoutes = () => {
  return useRoutes([...authRoutes, ...guestRoutes]);
};
