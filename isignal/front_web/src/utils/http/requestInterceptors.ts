import { isAuthenticated, clearUserData, getAccessToken } from '../auth/auth';
import { extractCsrfTokenFromCookie } from './csrfToken';

async function requestInterceptor(config) {
  if (!isAuthenticated()) {
    console.log('Je supprime le token dans le request interceptor');
    clearUserData();
    delete config.headers['Authorization'];
    return config;
  }
  const accessToken = getAccessToken();

  // Ajoute le token d'accès à l'en-tête d'autorisation
  config.headers['Authorization'] = `Bearer ${accessToken}`;

  // Ajoute le jeton CSRF à l'en-tête si disponible
  // const csrfToken = extractCsrfTokenFromCookie();
  // if (csrfToken) {
  //   config.headers['X-CSRF-Token'] = csrfToken;
  // }
  return config;
}

export default requestInterceptor;
