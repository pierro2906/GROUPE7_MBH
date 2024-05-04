import React from 'react';

export type AuthProviderProps = {
  children: React.ReactElement;
};

export interface IAuthState {
  isLoggedIn: boolean;
  authorityId?: string;
  role?: number;
  user?: { [key: string]: string };
}
export type UserData = {
  authorithyId: string;
  role: number;
};

export interface IAuthContext {
  authState: IAuthState;
  globalLogInDispatch: (props: IPayload) => void;
  globalLogOutDispatch: () => void;
}

export interface IPayload {
  authorithyId: string;
  role: number;
  user: {
    accessToken: string;
    refreshToken: string;
  };
}
