import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import { AddButton } from "components/AddButton";
import AddModel from './model/AddModel';
import './Page.scss';
import { SearchInput } from 'components/input';
import {  convert_data_Search_select, filterDataByDynamicValue } from './model/Field';
import Select from "react-select";

const Page = (props) => {
  const t = useTranslation();
  const Data = props?.data || [];
  const [isOpen, setisOpen] = useState(false)
  const [objectToEdit, setobjectToEdit] = useState([])
  const column = props?.useTableColumns(props?.DatadeleteMutation, setisOpen,setobjectToEdit)
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [SearchBy, setSearchBy] = useState(props?.SearchBy)

  const handleAddClick = () => {
    setisOpen(true);
    setobjectToEdit([]);
  };
  useEffect(() => {
    if (Array.isArray(Data)) {
      if (searchText) {
        setFilteredData(
          filterDataByDynamicValue(Data, searchText, SearchBy)
        );
      } else {
        setFilteredData(Data);
      }
    }
  }, [searchText, Data]);
  const MyExpandableComponent = ({ data }) => {
    return <pre> <h4>{t(props?.Expand)}</h4>  {t(data[props?.Expand])}</pre>;
  };

  return (
    <div className="Page">
      <div className='K_Flex'>
        <AddButton onClick={handleAddClick} />
        <div  className='KK_Flex'>
                  <SearchInput onChange={setSearchText} placeholder={t("search by")}  />
                  <Select placeholder={t("SearchBy")} options={convert_data_Search_select(props?.selecter)}
                   name="status" onChange={(opt) => { setSearchBy(opt.value); }} />  
                         </div>
      </div>

      <Card>
        <CardBody className="">
          <DataTable
            columns={column}
            data={searchText ? filteredData : Data}
            progressPending={props?.isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination
            expandableRows={!!props?.Expand}
            expandableRowsComponent={ props?.Expand ? <MyExpandableComponent /> : undefined }
          />
        </CardBody>
      </Card>
      <AddModel
        isOpen={isOpen}
        setisOpen={setisOpen}
        setobjectToEdit={setobjectToEdit}
        objectToEdit={objectToEdit}
        {...props}
      />
    </div>
  );
};

export default Page;
