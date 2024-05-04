import useAuth from '../../store/auth/AuthContextProvider';
import { IPayload } from '../../store/auth/types';
import endpoints from '../../utils/api/endpoints';
import { getCustomPyload } from '../../utils/auth/auth';
import myAxios from '../../utils/http/axios';

export type LoginData = {
  matricule: string;
  password: string;
};
export const handleLogin = async (
  data: LoginData,
  fn: (payload: IPayload) => void,
) => {
  try {
    const response = await myAxios.post(endpoints.authorityLogin.path.v1, data);
    if (response.data.success) {
      const user = response.data.content;

      fn(getCustomPyload(user));
      console.log('Login successful');
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Login failed', error);
    // navigate('/');
  }
};

export const loginOptions = {
  matricule: { required: 'Le matricule est obligatoire' },
  password: { required: 'Le mot de passe est obligatoire' },
};
