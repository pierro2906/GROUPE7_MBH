import * as React from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import { Link } from 'react-router-dom';
import { FaAmbulance, FaFire } from 'react-icons/fa';
import { Categiry } from '../../../../types/app/category';
import { MdOutlineSportsKabaddi, MdPersonSearch } from 'react-icons/md';
import { GiChemicalBolt } from 'react-icons/gi';
import Breadcrumb from '../../../partials/Breadcrumbs/Breadcrumb';
export interface ISignalementCategoryProps {}
const categoryData: Categiry[] = [
  {
    name: 'Violences domestiques',
    text: 'Assiyéyé',
    time: 12,
    textCount: 0,
    color: '#DC3545',
    icon: (
      <MdOutlineSportsKabaddi className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },
  {
    name: "Disparition d'une personne",
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: (
      <MdPersonSearch className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },
  {
    name: 'Incendie',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: <FaFire className="rounded-full transform scale-110 h-14 w-14" />,
  },
  {
    name: 'Accident',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: (
      <FaAmbulance className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },

  {
    name: 'Pollution',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    icon: (
      <GiChemicalBolt className="rounded-full transform scale-110 h-14 w-14" />
    ),
  },
];
export function SignalementCategory(props: ISignalementCategoryProps) {
  return (
    <AuthLayout>
      <Breadcrumb pageName={'signalement catégories'} />
      <div className="grid grid-cols-1 gap-3 p-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categoryData.map((category, key) => (
          <div
            className="flex flex-col gap-6 rounded-md bg-white px-[32px] py-5 shadow-2xl transition-transform hover:scale-105"
            key={key}
          >
            <div className="">{category.icon}</div>
            <div className="space-y-3">
              <h2 className="text-xl font-medium">{category.name}</h2>

              <Link
                to="/signalements/category/liste"
                className="text-ind group flex items-center gap-2 text-sm text-myblue"
              >
                Explorer
                <svg
                  className="transition-transform duration-500 group-hover:translate-x-1"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1958 1.47132C9.9354 1.21097 9.9354 0.788864 10.1958 0.528514C10.4561 0.268165 10.8782 0.268165 11.1386 0.528514L15.1386 4.52851C15.3989 4.78886 15.3989 5.21097 15.1386 5.47132L11.1386 9.47132C10.8782 9.73167 10.4561 9.73167 10.1958 9.47132C9.9354 9.21097 9.9354 8.78886 10.1958 8.52851L13.0577 5.66658H1.34101C0.968761 5.66658 0.666992 5.3681 0.666992 4.99991C0.666992 4.63172 0.968761 4.33324 1.34101 4.33324H13.0577L10.1958 1.47132Z"
                    fill="#39769c"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </AuthLayout>
  );
}
