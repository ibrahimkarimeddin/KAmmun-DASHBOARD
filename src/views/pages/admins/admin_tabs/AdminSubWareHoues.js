import { useGetSingleAdmin } from 'api/admin'
import SpinnerComponent from 'components/@vuexy/spinner/Fallback-spinner'
import React from 'react'
import DataTable from 'react-data-table-component'
import { useLocation, useParams } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap'
import { useTranslation } from 'utility/language'
import { TableSpinner } from 'views/components/TableSpinner'
import useTableColumnsDriverOrder from './useTableColumnsDriverOrder'

function AdminSubWareHoues() {
  
  const {id} = useParams()

const {data, isLoading} = useGetSingleAdmin({admin_id:id})
  const SubWarehouses = data?.sub_warehouses
  const t = useTranslation()
  const column = useTableColumnsDriverOrder()

  if(isLoading){
    return <SpinnerComponent />  
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{t("admin_sub_warehouses")}</h2>
        </CardTitle>

      </CardHeader>
      <CardBody>
      <DataTable
            columns={column}
            data={SubWarehouses}
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

export default AdminSubWareHoues