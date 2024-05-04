import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../store/auth/AuthContextProvider';

const PrivateRoutes = ({ redirectPath = '/login', children }: any) => {
  const { authState } = useAuth();
  // const location = useLocation();

  if (!authState.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet></Outlet>;
};

export default PrivateRoutes;
