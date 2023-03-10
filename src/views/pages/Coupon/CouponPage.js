import { useDeleteAdmin, useGetAdmin, useGetWareHouses } from 'api/admin'

import React from 'react'
import { getInitialValues, getValidationSchema } from './Formik'
import { useAddBanner, useUpdateBanner } from 'api/Banner';
import useTableColumns from './useTableColumns';
import Page from 'K_Layout/Page';

const CouponPage = () => {
  // Get Api  hook
  const {data,isLoading} = useGetAdmin()
  const deleteMutation = useDeleteAdmin();
  // Add && Update Model Data
  const AddMutation = useAddBanner();
  const UpdateMutation = useUpdateBanner();
  const { data: option } = useGetWareHouses()
  const ModelData = [
    { name: 'name', type: 'text', col: 1 },
    { name: 'email', type: 'date', col: 1 },
    { name: 'phone', type: 'select', col: 2, option: option },
  ]

 const selecter =["name","phone","roles","warehouse.name"] 

  return (
    <Page
    isLoading={isLoading}
      data={data?.data}
      useTableColumns={useTableColumns}
      UpdateMutation={UpdateMutation}
      AddMutation={AddMutation}
      ModelData={ModelData}
      deleteMutation={deleteMutation}
      getInitialValues={getInitialValues}
      getValidationSchema={getValidationSchema}
      Name="Coupon"
      SearchBy="name"
      selecter={selecter}
    />
  );
};

export default CouponPage;
