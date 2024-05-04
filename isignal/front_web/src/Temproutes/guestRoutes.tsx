import PageTitle from '../Tempcomponents/PageTitle';

import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';

import PublicRoutes from './PublicRoutes';

export const guestRoutes = [
  {
    path: '/',
    element: <PublicRoutes />,
    children: [
      {
        path: '/login',
        element: (
          <>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/register',
        element: (
          <>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </>
        ), // Utilisez PrivateRoute
      },
    ],
  },
];
