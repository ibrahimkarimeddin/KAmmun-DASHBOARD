import React from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "react-feather";
import "assets/scss/plugins/extensions/react-paginate.scss";
import { Card, CardBody } from "reactstrap";
import PerPageDropdown from "components/PerPageDropdown";
import { useTranslation } from "utility/language";
import { SearchInput } from "components/input/SearchInput";
import useTableColumns from "./useTableColumns";
import { usePagination } from "hooks/dataTable/usePagination";
import { usePaginationWithURL } from "hooks/usePaginationWithURL";
import { TableSpinner } from "views/components/TableSpinner";
import { useGetAdmin, useGetWareHouses } from "api/admin";
import { AddButton } from "components/AddButton";

import { history } from "../../../history";
import AddSubWareHouseToAdmin from "./model/AddSubWareHouseToAdmin/AddSubWareHouseToAdmin";
import Select from "react-select";
import { convert_data_to_select } from "./form/formUtils";
import GiveRoleToAdminModel from "./model/GiveRoleToAdmin/GiveRoleToAdminModel";

const AdminsPage = (props) => {
  const t = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [objectToEdit, setobjectToEdit] = React.useState(null);
  const [SelectedWareHouse, setSelectedWareHouse] = React.useState(null);
  const { page, per_page, handlePageChange, handlePerPageChange } = usePaginationWithURL(props.location);
  const filterPagination = usePagination();
  const [search, setSearchText] = React.useState("");
  const filterIsApplied = search !== "" || SelectedWareHouse;

  React.useEffect(() => {
    if (filterIsApplied) { filterPagination.handlePageChange(0); }
  }, [search, filterIsApplied]);
  const { data, isLoading } = useGetAdmin({
    page: filterIsApplied ? filterPagination.page : page,
    per_page,
    search,
    warehouse_id: SelectedWareHouse
  });
  const Admins = data?.data || [];
  const totalRows = data?.pagination?.total || 0;
  const columns = useTableColumns(setIsOpen, setobjectToEdit,setIsOpen2);

  const { data: warehouse } = useGetWareHouses();
  const ExpandedComponent = ({ data }) => {
    return <pre> <h4>{t("place")}</h4>  {data?.roles} </pre>;
  };
  return (
    <>
      <div
        className="d-flex align-items-center mb-1 justify-content-between flex-wrap"
        style={{ width: "100%" }}
      >
        <div className="d-flex align-items-center">
          <h4 className="">
            {t("admins")}
            <div className="d-flex">
              {true && <AddButton onClick={() => history.push("dashboard/admin/add")} />}
            </div>
          </h4>
        </div>
        <div className="d-flex align-items-end flex-column">
          <div className="d-flex " style={{ alignItems: "center" }}>
            <div style={{ width: "15rem" }} className="mr-1">
              <Select
                placeholder={t("status")}
                options={convert_data_to_select(warehouse)}
                name="status"
                onChange={(opt) => {
                  setSelectedWareHouse(opt.value);
                }}
              />
            </div>

            <PerPageDropdown
              className="custom-dropdown mr-1"
              per_page={per_page}
              handlePerPage={(v) => {
                filterPagination.handlePageChange(0);
                handlePerPageChange(v);
                filterPagination.handlePerPageChange(v);
              }}
            />

            <SearchInput onChange={setSearchText} placeholder={t("search")} />
          </div>
        </div>
      </div>
      <Card>
        <CardBody className="">
          <DataTable
            columns={columns}
            data={Admins}
            expandableRows
            expandableRowsComponent={<ExpandedComponent/>}
            progressPending={isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination
            paginationServer
            paginationComponent={() => (
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel="..."
                breakClassName="break-me"
                pageCount={totalRows / per_page}
                containerClassName="vx-pagination separated-pagination pagination-center pagination-sm mb-0 mt-2"
                activeClassName="active"
                forcePage={
                  filterIsApplied ? filterPagination.page - 1 : page - 1
                }
                onPageChange={(v) => {
                  if (filterIsApplied) {
                    filterPagination.handlePageChange(v);
                  } else {
                    handlePageChange(v);
                  }
                }}
              />
            )}
            sortServer
          />
        </CardBody>
      </Card>
      <AddSubWareHouseToAdmin
        isOpen={isOpen}
        setIsopen={setIsOpen}
        object={objectToEdit}
      />
      <GiveRoleToAdminModel 
      isOpen={isOpen2}
      setIsopen={setIsOpen2}
      object={objectToEdit}
      />
    </>
  );
};

export default AdminsPage;
