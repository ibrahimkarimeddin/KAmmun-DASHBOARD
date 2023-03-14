import { useGetUser } from 'api/User';
import { AddButton } from 'components/AddButton';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import useTableColumns from './useTableColumns';
import { history } from "../../../history";
import { usePaginationWithURL } from 'hooks';
import {HandelPagination, HandelPerPage} from 'K_Layout/Pagination';
import { SearchInput } from 'components/input';

const UserPage = (props) => {
  const t = useTranslation();
  const { page, per_page, handlePageChange,handlePerPageChange} = usePaginationWithURL(props.location);
  const [search, setsearch] = useState("");
  const { data, isLoading } = useGetUser({page,per_page,search})
  const Data = data?.data || [];
  const columns = useTableColumns();
  const totalRows = data?.pagination?.total || 0;
  return (
    <div className="Page">
    <div className='K_Flex'>
    <AddButton onClick={() => history.push("/dashboard/user/add")} />
    <div className='KK_Flex'>
    <SearchInput onChange={setsearch} placeholder={t(`search here..`)}  />
    <HandelPerPage per_page={per_page}  handlePerPageChange={handlePerPageChange}/>
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
            paginationServer
            paginationComponent={() => (
             <HandelPagination totalRows={totalRows} per_page={per_page} page={page} handlePageChange={handlePageChange}/>
            )}
            sortServer
            
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default UserPage