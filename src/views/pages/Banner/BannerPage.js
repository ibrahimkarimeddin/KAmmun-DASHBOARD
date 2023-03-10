import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody } from "reactstrap";
import { useTranslation } from "utility/language";
import useTableColumns from "./useTableColumns";
import { TableSpinner } from "views/components/TableSpinner";
import { AddButton } from "components/AddButton";
import { useGetBanner } from "api/Banner";
import AddBanner from "./model/AddModel";
const BannerPage = (props) => {
  const t = useTranslation();
  const { data, isLoading } = useGetBanner();
  const [objectToEdit, setobjectToEdit] = useState(null);
  const [isOpen, setisOpen] = useState(false)
  const Banner = data || []
  const columns = useTableColumns(setobjectToEdit,setisOpen);
  return (  
    <>
      <div  className="d-flex align-items-center mb-1 justify-content-between flex-wrap" style={{ width: "100%" }}>
        <div className="d-flex align-items-center ">
          <h4 className="">    {t("Banner")}
            <div className="d-flex mt-1">
            <AddButton onClick={() => {setisOpen(true);setobjectToEdit([]) }}/>
            </div>
          </h4>
        </div>
        <div className="d-flex align-items-end flex-column">
        </div>
      </div>
      <Card>
        <CardBody className="">
          <DataTable
            columns={columns}
            data={Banner}
            progressPending={isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
          />
        </CardBody>
      </Card>
      <AddBanner 
      isOpen={isOpen}
      setIsopen={setisOpen}
      objectToEdit={objectToEdit}
      />
    </>
  );
};

export default BannerPage;
