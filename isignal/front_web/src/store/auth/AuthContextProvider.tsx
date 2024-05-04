import { useNavigate } from 'react-router-dom';

// Global imports
import {
  createContext,
  useReducer,
  useCallback,
  useEffect,
  useContext,
} from 'react';

// Project dependencies
import { AuthActionEnum } from './authAction';
import authReducer, { defaultAuthState } from './authReducer';
import {
  getAccessToken,
  getPayloadFromToken,
  getUserData,
} from '../../utils/auth/auth';
import { AuthProviderProps, IAuthContext, IPayload } from './types';

// Auth context
const authCtx = createContext<IAuthContext>({
  authState: defaultAuthState,
  globalLogInDispatch: () => {},
  globalLogOutDispatch: () => {},
});

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
  const navigate = useNavigate();

  // Check if user detail is persisted, mostly catering for refreshing of the browser
  useEffect(() => {
    try {
      const userData = getPayloadFromToken(getAccessToken());
      const user = getUserData();
      // console.log(user);

      if (Object.keys(user).length > 0) {
        const payload: IPayload = {
          authorithyId: (userData as any).authorityId,
          role: (userData as any).role,
          user,
        };
        authDispatch({ type: AuthActionEnum.LOG_IN, payload });
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [navigate]);

  const globalLogInDispatch = useCallback(
    (props: IPayload) => {
      const { authorithyId, role, user } = props;
      console.log(props);

      authDispatch({
        type: AuthActionEnum.LOG_IN,
        payload: {
          authorithyId,
          role,
          user: user,
        },
      });
      navigate('/urgences');
    },
    [navigate],
  );

  const globalLogOutDispatch = useCallback(() => {
    authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
    navigate('/login');
  }, []);

  // context values to be passed down to children
  const ctx = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
  };

  return <authCtx.Provider value={ctx}>{children}</authCtx.Provider>;
};
const useAuth = () => useContext(authCtx);
export default useAuth;
