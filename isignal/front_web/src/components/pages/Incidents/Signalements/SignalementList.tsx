import * as React from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import { Link } from 'react-router-dom';
import { FaAmbulance, FaEye, FaFire, FaRegTrashAlt } from 'react-icons/fa';
import { Signalement } from '../../../../types/app/signalement';
import { MdOutlineSportsKabaddi, MdPersonSearch } from 'react-icons/md';
import { GiChemicalBolt } from 'react-icons/gi';
import Breadcrumb from '../../../partials/Breadcrumbs/Breadcrumb';
import SignalementCoverImage from '../../../../images/custom/signalement-cover.png';
import { FiDownload } from 'react-icons/fi';
export interface ISignalementListProps {}
const signalementData: Signalement[] = [
  {
    name: 'lorem',
    text: 'Assiyéyé',
    time: 12,
    textCount: 0,
    color: '#DC3545',
    icon: (
      <MdOutlineSportsKabaddi className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },
  {
    name: 'lorem',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: (
      <MdPersonSearch className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },
  {
    name: 'loerm',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: <FaFire className="rounded-full transform scale-110 h-14 w-14" />,
  },
  {
    name: 'dddddd',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: (
      <FaAmbulance className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },

  {
    name: 'Pris',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: (
      <GiChemicalBolt className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },
];
export function SignalementList(props: ISignalementListProps) {
  return (
    <AuthLayout>
      <Breadcrumb pageName={'Catégorie Pollution'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {signalementData.map((signalement, key) => (
          <div
            className={`card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 ${signalement.name == 'Pris' ? 'bg-black' : ''}`}
            key={key}
          >
            <div className="m-3">
              <h2 className="text-lg mb-2">
                {signalement.name}
                <span
                  className={`text-sm text-white font-monoinline rounded-full px-2 align-top float-right ${signalement.name == 'Pris' ? 'bg-black ' : 'animate-pulse  bg-red-400 '}`}
                >
                  Tag
                </span>
              </h2>
              <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                {signalement.text}
              </p>
            </div>
            <div className="mx-6 my-4 flex">
              <div className="flex items-center space-x-3.5">
                <Link
                  to={'/signalements/category/details'}
                  className="hover:text-primary"
                >
                  <FaEye />
                </Link>
                {/* <button className="hover:text-primary">
                  <FaRegTrashAlt />
                </button> */}
                <button className="hover:text-primary">
                  <FiDownload />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AuthLayout>
  );
}
