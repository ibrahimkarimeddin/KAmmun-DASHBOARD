import { useGetDelivery_method } from 'api/delivery_method';
import { AddButton } from 'components/AddButton';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import AddModel from './model/AddModel';
import useTableColumns from './useTableColumns';

const DeliveryMethodPage = () => {
  const t = useTranslation();
  const { data, isLoading } = useGetDelivery_method()
  const Data = data || [];
  const [objectToEdit, setobjectToEdit] = useState(null);
  const [isOpen, setisOpen] = useState(false)
  const columns = useTableColumns(setobjectToEdit,setisOpen);

  return (
    <>
    <div  className="d-flex align-items-center mb-1 justify-content-between flex-wrap" style={{ width: "100%" }}>
    <div className="d-flex align-items-center">
      <h4 className="">    {t("delivery_method")}
        <div className="d-flex">
        <AddButton onClick={() => {setisOpen(true);setobjectToEdit(null) }}/>
        </div>
      </h4>
      </div>

    </div>
        <Card>
        <CardBody className="">
          <DataTable
            columns={columns}
            data={Data}
            progressPending={isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
          />
        </CardBody>
      </Card>
      <AddModel  isOpen={isOpen}  setIsopen={setisOpen} objectToEdit={objectToEdit}/>
    </>
  )
}

export default DeliveryMethodPage