import { useEffect, useState } from 'react';

import Loader from './common/Loader';

import { AuthContextProvider } from './store/auth/AuthContextProvider';
import AppRoutes from './components/routes/index';
import { useLocation } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  );
}

export default App;
