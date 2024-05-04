import Breadcrumb from '../Tempcomponents/Breadcrumbs/Breadcrumb';
import TableOne from '../Tempcomponents/Tables/TableOne';
import TableThree from '../Tempcomponents/Tables/TableThree';
import TableTwo from '../Tempcomponents/Tables/TableTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
