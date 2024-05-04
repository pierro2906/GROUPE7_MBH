/* ui/src/store/auth/authReducer.ts */

import { Reducer } from 'react';

import { IAuthState } from './types';
import { clearUserData, setUserData } from '../../utils/auth/auth';
import { AuthAction } from './authAction';

export const defaultAuthState: IAuthState = {
  isLoggedIn: false,
};

const authReducer: Reducer<IAuthState, AuthAction> = (state, action) => {
  // user successfully authenticated
  if (action.type === 'LOG_IN') {
    setUserData(action.payload.user);
    return {
      ...state,
      isLoggedIn: true,
      authorityId: action.payload.authorithyId,
      role: action.payload.role,
    };
  }

  // log out user
  if (action.type === 'LOG_OUT') {
    clearUserData();
    return defaultAuthState;
  }

  return defaultAuthState;
};

export default authReducer;
