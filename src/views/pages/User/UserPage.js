import { useGetUser } from 'api/User';
import { AddButton } from 'components/AddButton';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import useTableColumns from './useTableColumns';
import { history } from "../../../history";

const UserPage = () => {
  const t = useTranslation();
  const { data, isLoading } = useGetUser()
  const Data = data?.data || [];
  const columns = useTableColumns();

  return (
    <>
    <div  className="d-flex align-items-center mb-1 justify-content-between flex-wrap" style={{ width: "100%" }}>
        <div className="d-flex align-items-center ">
          <h4 className="">    {t("Users")}
            <div className="d-flex mt-1">
            <AddButton onClick={() => history.push("user/add")} /></div>
          </h4>
        </div>
        <div className="d-flex align-items-end flex-column">
        </div>
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
    </>
  )
}

export default UserPage