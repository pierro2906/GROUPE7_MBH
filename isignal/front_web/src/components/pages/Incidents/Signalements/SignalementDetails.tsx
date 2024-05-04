import Breadcrumb from '../../../partials/Breadcrumbs/Breadcrumb';
import userThree from '../../../../images/user/user-03.png';
import AuthLayout from '../../../layouts/AuthLayout';
import { FaEye, FaFileVideo, FaMapMarkerAlt } from 'react-icons/fa';
import { SiFiles } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { PiFilePdfFill } from 'react-icons/pi';
import { FiDownload } from 'react-icons/fi';
import { SignalementChat } from './SignalementChat';

const SignalementDetails = () => {
  return (
    <AuthLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Details signalement" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Détails du signalement
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <img src={userThree} alt="User" />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Koffi TOTO
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary">
                          A+
                        </button>
                        <button className="text-sm hover:text-primary">
                          ...
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <FaMapMarkerAlt />
                      </span>
                      <p>
                        <span className="text-primary">Quartier</span> Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque, inventore aspernatur optio maiores quaerat
                        reiciendis quam facere est corporis cumque nesciunt
                        earum laborum maxime dignissimos sequi amet blanditiis.
                        Magni, cum!
                      </p>
                      {/* <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p> */}
                    </div>
                  </div>
                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <SiFiles />
                      </span>

                      {/* <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p> */}
                    </div>
                    <ul>
                      <li>
                        <Link
                          to="/signalements/category/details"
                          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                        >
                          <div className="relative h-14 w-14 rounded-full">
                            {/* <img src={urgence.avatar} alt="User" /> */}

                            <PiFilePdfFill className="rounded-full transform scale-100 h-8 w-14" />
                          </div>

                          <div className="flex flex-1 items-center justify-between">
                            <div>
                              <h5 className="font-small text-black dark:text-white">
                                document.pdf
                              </h5>
                              <p>
                                <span className="text-sm text-black dark:text-white">
                                  5 KO
                                </span>
                              </p>
                            </div>

                            <div className="flex h-6 w-6 items-center justify-center rounded-full ">
                              <Link
                                to={'/signalements/category/details'}
                                className="hover:text-primary"
                              >
                                <FaEye />
                              </Link>
                              {/* <button className="hover:text-primary">
                  <FaRegTrashAlt />
                </button> */}
                              <button className="hover:text-primary m-2">
                                <FiDownload />
                              </button>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/signalements/category/details"
                          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                        >
                          <div className="relative h-14 w-14 rounded-full">
                            {/* <img src={urgence.avatar} alt="User" /> */}

                            <FaFileVideo className="rounded-full transform scale-100 h-8 w-14" />
                          </div>

                          <div className="flex flex-1 items-center justify-between">
                            <div>
                              <h5 className="font-small text-black dark:text-white">
                                video.mp4
                              </h5>
                              <p>
                                <span className="text-sm text-black dark:text-white">
                                  10 MB
                                </span>
                              </p>
                            </div>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full">
                              <Link
                                to={'/signalements/category/details'}
                                className="hover:text-primary"
                              >
                                <FaEye />
                              </Link>
                              {/* <button className="hover:text-primary">
                  <FaRegTrashAlt />
                </button> */}
                              <button className="hover:text-primary m-2">
                                <FiDownload />
                              </button>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Passer
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Je m'en occupe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">Chat</h3>
              </div>
              <div className="p-7">
                <SignalementChat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignalementDetails;
