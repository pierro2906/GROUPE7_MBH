import { Link } from 'react-router-dom';
import Breadcrumb from '../../Tempcomponents/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../Tempcomponents/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';
import { handleGenerateCredentials } from '../../hooks/authority/useGenerateCredentials';
import useAuth from '../../store/auth/AuthContextProvider';

const FormLayout = () => {
  const { globalLogOutDispatch } = useAuth();
  const handleSubmit = (e) => {
    try {
      console.log(e);
      handleGenerateCredentials({ roleId: 1, bureauId: '3', userId: '4' });

      e.preventDefault();
    } catch (error) {
      console.log('je suis dans le form meme de generation de form');

      globalLogOutDispatch();
    }
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <input
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
