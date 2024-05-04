import React from 'react';

import IncidentMap from './IncidentMap';
import MapLayout from '../../../layouts/MapLayout';
// import UrgenceChart from './UrgentChart';
import UrgenceList from './UrgenceList';
// TODO: Add shadows and othes
const Urgence: React.FC = () => {
  return (
    <MapLayout>
      <div className="mt-1 grid grid-cols-12 grid-rows-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <IncidentMap />

        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 h-full overflow-y-scroll">
          {/* <UrgenceChart /> */}
          <UrgenceList />
        </div>
      </div>
    </MapLayout>
  );
};

export default Urgence;
