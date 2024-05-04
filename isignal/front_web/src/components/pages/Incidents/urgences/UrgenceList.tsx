import { Link } from 'react-router-dom';
import { Urgence } from '../../../../types/app/urgence';

import UserTwo from '../../../../images/user/user-02.png';

import UserFour from '../../../../images/user/user-04.png';

import { FaAmbulance, FaFire } from 'react-icons/fa';
const urgenceData: Urgence[] = [
  {
    avatar: UserTwo,
    name: 'Henry Fisher',
    text: 'Assiyéyé',
    time: 12,
    textCount: 0,
    color: '#DC3545',
    type: 'accident',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    type: 'accident',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    type: 'accident',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    type: 'accident',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    type: 'incendit',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    type: 'incendit',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    type: 'accident',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: 'Kégué',
    time: 32,
    textCount: 0,
    color: '#10B981',
    type: 'incendit',
  },
];

const UrgenceList = () => {
  return (
    <div>
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Liste Urgences
      </h4>

      <div className="">
        {urgenceData.map((urgence, key) => (
          <Link
            to="/signalements/category/details"
            className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              {/* <img src={urgence.avatar} alt="User" /> */}
              {urgence.type == 'accident' ? (
                <FaAmbulance className="rounded-full transform scale-110 h-14 w-14" />
              ) : (
                <FaFire className="rounded-full transform scale-110 h-14 w-14" />
              )}

              <span
                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: urgence.color }}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {urgence.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {urgence.text}
                  </span>
                  <span className="text-xs"> . {urgence.time} min</span>
                </p>
              </div>
              {urgence.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {' '}
                    {urgence.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UrgenceList;
