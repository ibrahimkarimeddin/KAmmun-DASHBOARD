import { useDeleteSupportedCity, useGetSupportedCity } from 'api/SupportedCity'
import React from 'react'
import { getInitialValues, getValidationSchema } from './Formik'
import { useAddSupportedCity, useUpdateSupportedCity } from 'api/SupportedCity';
import useTableColumns from './useTableColumns';
import Page from 'K_Layout/Page';
import { useGetWareHouse } from 'api/warehouse';

const SupportedCityPage = () => {
  // Get Api  hook
  const { data, isLoading } = useGetSupportedCity()
  const deleteMutation = useDeleteSupportedCity();
  // Add && Update Model Data
  const AddMutation = useAddSupportedCity();
  const UpdateMutation = useUpdateSupportedCity();
   const {data:selec} = useGetWareHouse()
   
  const ModelData = [
    { name: 'name', type: 'text', col: 1 },
    { name: 'delivery_price', type: 'number', col: 1 },
    { name: 'support_phone_number', type: 'text', col: 2 },
    { name: 'warehouse_id', type: 'select', col: 2, option:selec},
    { name: 'coupon_type_id', type: 'none', col: 2 },


  ]

  const selecter = ["name", "delivery_price", "support_phone_number", "warehouse.name"]

  return (
    <Page
    getDataToSend={(params)=>params}
      isLoading={isLoading}
      data={data}
      useTableColumns={useTableColumns}
      UpdateMutation={UpdateMutation}
      AddMutation={AddMutation}
      ModelData={ModelData}
      deleteMutation={deleteMutation}
      getInitialValues={getInitialValues}
      getValidationSchema={getValidationSchema}
      Name="SupportedCity"
      SearchBy="name"
      selecter={selecter}

    />
  );
};

export default SupportedCityPage;
