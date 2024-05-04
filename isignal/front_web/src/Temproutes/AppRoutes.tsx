import { Route, Routes, useRoutes } from 'react-router-dom';
import PageTitle from '../Tempcomponents/PageTitle';

import { authRoutes } from './authRoutes';
import { guestRoutes } from './guestRoutes';

export const AppRoutes = () => {
  return useRoutes([...authRoutes, ...guestRoutes]);
  // return authState.isLoggedIn ? <AuthRoutes /> : <GuestRoutes />;
};
