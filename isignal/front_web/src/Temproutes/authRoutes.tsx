import { Route, Routes } from 'react-router-dom';
import PageTitle from '../Tempcomponents/PageTitle';

import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';

import FormLayout from '../pages/Form/FormLayout';
import Buttons from '../pages/UiElements/Buttons';
import Alerts from '../pages/UiElements/Alerts';
import Chart from '../pages/Chart';
import Settings from '../pages/Settings';
import Tables from '../pages/Tables';
import FormElements from '../pages/Form/FormElements';
import Profile from '../pages/Profile';
import Calendar from '../pages/Calendar';
import ECommerce from '../pages/Dashboard/ECommerce';
import PrivateRoutes from './PrivateRoutes';
import FormTests from '../pages/Form/FormTests';
import Urgence from '../pages/app/incidents/urgences/Urgence';

export const authRoutes = [
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: '/ecomm',
        element: (
          <>
            <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <ECommerce />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/',
        element: (
          <>
            <PageTitle title="Urgence" />
            <Urgence />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: 'calendar',
        element: (
          <>
            <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormTests />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/profile',
        element: (
          <>
            <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Profile />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/forms/form-elements',
        element: (
          <>
            <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormElements />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/forms/form-layout',
        element: (
          <>
            <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormLayout />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/tables',
        element: (
          <>
            <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Tables />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/settings',
        element: (
          <>
            <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Settings />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/chart',
        element: (
          <>
            <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Chart />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/ui/alerts',
        element: (
          <>
            <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Alerts />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/ui/buttons',
        element: (
          <>
            <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Buttons />
          </>
        ), // Utilisez PrivateRoute
      },
    ],
  },
];
