import useAuth from '../../store/auth/AuthContextProvider';
import { IPayload } from '../../store/auth/types';
import endpoints from '../../utils/api/endpoints';
import { getCustomPyload } from '../../utils/auth/auth';
import myAxios from '../../utils/http/axios';

export type GenerateCredentialsData = {
  roleId: number;
  bureauId: string;
  userId: string;
};
export const handleGenerateCredentials = async (
  data: GenerateCredentialsData,
) => {
  try {
    const response = await myAxios.post(
      endpoints.authorityAccessGenerate.path.v1,
      data,
    );
    if (response.data.success) {
      const user = response.data.content;

      console.log('Generated successfully ', user);
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log('je quie le hook de generation de form');
    throw new Error('Generation failed' + error);

    // navigate('/');
  }
};
