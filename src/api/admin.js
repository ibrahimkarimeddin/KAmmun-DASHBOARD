import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useUploadWithProgress,
    useUploadWithProgress2,
    useDeleteMutation2,
    useUpdateMutation2,
    useToggleStatus,
  } from "./helpers";
import { useBlockPerson } from "./helpers/useBlockPerson";
  
  const API = {
    GET: `/api/dashboard/all_admin`,
    GETWAREHOUSE: `/api/warehouse`,
    GETSUBWAREHOUSE: `/api/dashboard/sub_warehouse`,
    SINGLE_ADMIN:`/api/dashboard/admin`,
    ADD: `/api/auth/admin_signin`,
    SyncSubWarehouses:`api/admin/sync_sub_warehouses_admin/`,
    UPDATE: `/api/admin/`,
    DELETE: `/api/admin/`,
    GIVE_ROLE_TO_ADMIN: `/api/admin/give_role_to_admin/`,
    SENDNOT:`/api/admin/driver/accept`,
    BLOCK:`api/admin/driver/block-status`,
    GIFT:`api/admin/code/give-gift`,
    STATUS:`/api/dashboard/admin/change_status`
  };
  
  const KEY = "ADMIN";
  export const useGetAdmin = (params) => useGetQuery(KEY, API.GET, params);
  export const useGetSingleAdmin=(params)=>useGetQuery(KEY,API.SINGLE_ADMIN, params);
  export const useGetAdminSubWareHoues = (params) => useGetQuery(KEY, API.GET_ORDER_DRIVER , params);
  export const useUpdateSingleAdmin = (params)=> useUploadWithProgress2(KEY , API.UPDATE+params)
  export const useAddAdmin = () => useUploadWithProgress(KEY, API.ADD);
  export const useGetWareHouses = (params) => useGetQuery(KEY, API.GETWAREHOUSE, params);
  export const useGetSubWareHouses = () => useGetQuery("SUBWAREHOUSE", API.GETSUBWAREHOUSE);
  export const useDeleteAdmin = () =>useDeleteMutation2(KEY, API.DELETE);
  export const useSyncSubWarehousesToAdmin = (params) =>useUpdateMutation2(KEY, API.SyncSubWarehouses+params );
  export const useGiveRoleToAdmin = (params) => useUpdateMutation(KEY, API.GIVE_ROLE_TO_ADMIN+params);
export const useUpdateAdminstatus = () => useToggleStatus(KEY, API.STATUS,'admin_id')




  export const useBlockDriver = () =>useBlockPerson(KEY, API.BLOCK,"driver_id" );
  export const useGiftDriver = () =>useAddMutation(KEY, API.GIFT );
  export const useAcceptedDriver = ()=>useAddMutation(KEY ,API.SENDNOT )
  export const useUnBlockDriver = () => useAddMutation(KEY, API.UNBLOCK);

