/* ui/src/store/auth/authActions.ts */

import { IPayload } from './types';

export enum AuthActionEnum {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
}

export type AuthAction =
  | {
      type: AuthActionEnum.LOG_IN;
      payload: IPayload;
    }
  | {
      type: AuthActionEnum.LOG_OUT;
      payload: null;
    };
