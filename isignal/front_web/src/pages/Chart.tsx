import React from 'react';
import Breadcrumb from '../Tempcomponents/Breadcrumbs/Breadcrumb';
import ChartOne from '../Tempcomponents/Charts/ChartOne';
import ChartThree from '../Tempcomponents/Charts/ChartThree';
import ChartTwo from '../Tempcomponents/Charts/ChartTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Chart: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </DefaultLayout>
  );
};

export default Chart;
