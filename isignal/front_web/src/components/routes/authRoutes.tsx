import { Route, Routes } from 'react-router-dom';
import PageTitle from '../partials/PageTitle';

import PrivateRoutes from './PrivateRoutes';
import Urgence from '../pages/Incidents/urgences/Urgence';
import { SignalementCategory } from '../pages/Incidents/Signalements/SignalementCategory';
import AssignationMain from '../pages/Assignations/AssignationMain';
import { SignalementList } from '../pages/Incidents/Signalements/SignalementList';
import SignalementDetails from '../pages/Incidents/Signalements/SignalementDetails';
import { SignalementChat } from '../pages/Incidents/Signalements/SignalementChat';
import { Chat } from '../pages/General/Chat';

export const authRoutes = [
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: '/urgences',
        element: (
          <>
            <PageTitle title="Urgences" />
            <Urgence />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/signalements/categories',
        element: (
          <>
            <PageTitle title="categories" />
            <SignalementCategory />
          </>
        ), // Utilisez PrivateRoute
      },
      // TODO: add params to the route according to the signalement category
      {
        path: '/signalements/category/liste',
        element: (
          <>
            <PageTitle title="Signalement {category}" />
            <SignalementList />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/signalements/category/details',
        element: (
          <>
            <PageTitle title="Signalement" />
            <SignalementDetails />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/general/chat',
        element: (
          <>
            <PageTitle title="Chat" />
            <Chat />
          </>
        ), // Utilisez PrivateRoute
      },
      {
        path: '/espace/assignations',
        element: (
          <>
            <PageTitle title="Mes assignations" />
            <AssignationMain />
          </>
        ), // Utilisez PrivateRoute
      },
    ],
  },
];
