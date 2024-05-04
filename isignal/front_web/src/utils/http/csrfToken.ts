export const extractCsrfTokenFromCookie = () => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'csrfToken') {
      return value;
    }
  }
  return '';
};
