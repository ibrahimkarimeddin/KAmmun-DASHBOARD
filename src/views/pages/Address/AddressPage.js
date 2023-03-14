import { useDeleteAddress, useGetAddress } from 'api/address'
import React from 'react'
import { getInitialValues, getValidationSchema } from './Formik'
import { useAddAddress, useUpdateAddress } from 'api/address';
import useTableColumns from './useTableColumns';
import Page from 'K_Layout/Page';
import { useGetWareHouse } from 'api/warehouse';
import { useGetSupportedCity } from 'api/SupportedCity';

const AddressPage = () => {
  // Get Api  hook
  const { data, isLoading } = useGetAddress()
  const deleteMutation = useDeleteAddress();
  // Add && Update Model Data
  const AddMutation = useAddAddress();
  const UpdateMutation = useUpdateAddress();
   const {data:supported_city} = useGetSupportedCity()
  const ModelData = [
    { name: 'supported_city_id', type: 'select', col: 1,option:supported_city },
    { name: 'street', type: 'text', col: 1 },
    { name: 'building', type: 'text', col: 1 },
    { name: 'entrance', type: 'text', col: 2,},
    { name: 'floor', type: 'text', col: 2 },
    { name: 'description', type: 'text', col: 2 },
        { name: 'longitude', type: 'none', col: 2 },
        { name: 'latitude', type: 'none', col: 1 },




  ]

  const selecter = [ "street", "building", "entrance","floor","address_title"]

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
      Name="Address"
      SearchBy="street"
      selecter={selecter}
      Expand="address_title"

    />
  );
};

export default AddressPage;
