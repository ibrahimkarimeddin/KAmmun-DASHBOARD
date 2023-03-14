import { useGetUser } from 'api/User';
import { AddButton } from 'components/AddButton';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import useTableColumns from './useTableColumns';
import { history } from "../../../history";

const Page = () => {
  const t = useTranslation();
  const { data, isLoading } = useGetUser()
  const Data = data?.data || [];
  const columns = useTableColumns();
  return (
    <div className="Page">
    <div className='K_Flex'>
    <AddButton onClick={() => history.push("/dashboard/user/add")} />
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

export default Page