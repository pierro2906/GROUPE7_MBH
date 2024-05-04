import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../store/auth/AuthContextProvider';

const PublicRoutes = ({ redirectPath = '/', children }: any) => {
  const { authState } = useAuth();

  // const location = useLocation();

  if (!authState.isLoggedIn) {
    return children || <Outlet></Outlet>;
  }
  return <Navigate to={redirectPath} replace />;
};

export default PublicRoutes;
