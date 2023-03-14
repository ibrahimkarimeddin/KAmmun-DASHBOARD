import { useGetRole } from 'api/role';
import { AddButton } from 'components/AddButton';
import React from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import useTableColumns from './useTableColumns';
import { history } from "../../../history";

const RolePage = () => {
  const t = useTranslation();
  const { data, isLoading } = useGetRole()
  const Data = data || [];
  console.log(Data);
  const columns = useTableColumns();
  return (
    <div className="Page">
    <div className='K_Flex'>
    <AddButton onClick={() => history.push("/dashboard/Role/add")} />
    </div>

        <Card>
        <CardBody>
          <DataTable
            columns={columns}
            data={Data}
            progressPending={isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination
            
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default RolePage