import {
    useGetQuery,
     useAddMutation2,
     useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
    useUpdateMutation2,
    useDeleteMutation2,
  } from "./helpers";
  
  const API = {
    GET: `/api/warehouse/`,
    ADD: `/api/warehouse/`,
    UPDATE: `/api/dashboard/warehouse/`,
    DELETE: `/api/warehouse/`,
    UPDATE_STATUS:`api/dashboard/change_status`
  };
  
  const KEY = "WAREHOUSE";
  export const useGetWareHouse = () => useGetQuery(KEY, API.GET);
  export const useAddWareHouse = () => useAddMutation2(KEY, API.ADD);
  // export const useUpdateWareHouse = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteWareHouse = () =>
    useDeleteMutation2(KEY, API.DELETE);
  export const useUpdateWareHouseStatus = () =>
    useToggleStatus(KEY, API.UPDATE_STATUS,'warehouse_id');
    
  export const useUpdateWareHouse = (params) => useUpdateMutation2(KEY, API.UPDATE+params);
