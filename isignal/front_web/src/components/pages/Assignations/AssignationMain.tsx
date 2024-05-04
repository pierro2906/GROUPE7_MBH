import React from 'react';

import Breadcrumb from '../../partials/Breadcrumbs/Breadcrumb';
import AssignationList from './AssignationList';

import AuthLayout from '../../layouts/AuthLayout';
// TODO: Add shadows and othes
const AssignationMain: React.FC = () => {
  return (
    <AuthLayout>
      <Breadcrumb pageName="Mes Assignations" />
      <AssignationList />
    </AuthLayout>
  );
};

export default AssignationMain;
