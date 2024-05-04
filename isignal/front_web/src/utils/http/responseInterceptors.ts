import {
  getRefreshToken,
  setUserData,
  clearUserData,
  updateAccessToken,
} from '../auth/auth';
import endpoints from '../api/endpoints';
const refreshEndpoint = endpoints.authorityRefresh.path.v1;

async function responseErrorInterceptor(error, myAxios) {
  const originalRequest = error.config;
  // console.log(error, 'Audrey');

  // Gestion des erreurs 401 et tentative de rafraîchissement du token d'accès
  if (
    error.response.status === 401 &&
    !originalRequest._retry &&
    originalRequest.url !== refreshEndpoint
  ) {
    originalRequest._retry = true;

    try {
      const refreshToken = getRefreshToken();
      const response = await myAxios.post(refreshEndpoint, { refreshToken }); // Appel à l'API pour rafraîchir le token
      if (response.data.success) {
        const user = response.data.content;
        // Met à jour l'en-tête d'autorisation avec le nouveau token d'accès
        originalRequest.headers['Authorization'] = `Bearer ${user.accessToken}`;

        setUserData(user);
        updateAccessToken(user.accessToken);

        // Réessaye la requête originale avec le nouveau token d'accès
        return myAxios(originalRequest);
      } else {
        throw Error('Refresh failed. Log in again');
      }
    } catch (error) {
      // En cas d'erreur lors du rafraîchissement, déconnecte l'utilisateur
      clearUserData();
      delete originalRequest.headers['Authorization'];
      console.log(error.message, 'Je viens du response interceptor');
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
}

export { responseErrorInterceptor };
