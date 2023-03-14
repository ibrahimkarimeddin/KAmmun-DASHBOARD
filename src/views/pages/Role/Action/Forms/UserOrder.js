import { useGetUserOrder } from 'api/User'
import React from 'react'
import DataTable from 'react-data-table-component'
import { useParams } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'
import { useTranslation } from 'utility/language'
import { TableSpinner } from 'views/components/TableSpinner'
import useTableColumns from './useTableColumns'

const UserOrder = () => {
  const {id} = useParams()
    const {data,isLoading} = useGetUserOrder({user_id:id})
    const Data = data?.data || [];
    const column = useTableColumns()
    const t = useTranslation();

  return (
    
    <Card>
    <CardBody >
      <DataTable
        columns={column}
        data={Data}
        progressPending={isLoading}
        progressComponent={<TableSpinner />}
        noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
        noHeader
        pagination
      />
    </CardBody>
  </Card>
  
  )
}

export default UserOrder