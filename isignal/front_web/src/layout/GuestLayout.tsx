import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import LogoDark from '../images/logo/logo-icon.svg';
import Logo from '../images/logo/logo-icon.svg';
import Land from '../images/custom/land.svg';
const GuestLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}

      <div className="flex h-screen overflow-hidden flex-wrap items-center  ">
        <div className="hidden w-1/5 xl:block xl:w-2/5 h-screen   bg-primary  ">
          <div className="py-17.5 px-26 text-center flex justify-between items-center flex-col h-screen">
            <Link className="mb-5.5 inline-block" to="/">
              <img
                className="hidden dark:block"
                src={Logo}
                alt="Logo"
                height={200}
                width={200}
              />
              <img
                className="dark:hidden"
                src={LogoDark}
                alt="Logo"
                height={200}
                width={200}
              />
            </Link>
            <h1 className="text-2xl text-stroke font-drey">I-SignaL</h1>

            <p className="2xl:px-20 text-whiten">
              Gérer et diffuser les incidents <br />
              En toute convivialité
            </p>

            <span className="mt-15 inline-block">
              <img
                className=""
                src={Land}
                alt="Logo"
                height={400}
                width={400}
              />
            </span>
          </div>
        </div>

        {children}
      </div>

      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default GuestLayout;
