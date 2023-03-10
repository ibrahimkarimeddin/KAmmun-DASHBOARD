import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/accounting_system`,
    ADD: `/api/accounting_system/add`,
    UPDATE: `/api/accounting_system/update`,
    DELETE: `/api/accounting_system/delete`,
    UPDATE_STATUS: `/api/accounting_system/update_category_status`,
  };
  
  const KEY = "SYSTEM";
  export const useGetAccountingSystem = () => useGetQuery(KEY, API.GET);
  export const useAddAcountingSystem = () => useAddMutation(KEY, API.ADD);
  export const useUpdateAcountingSystem = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteAcountingSystem = () =>
    useDeleteMutation(KEY, API.DELETE, "accounting_system_id", "accounting_system");
  export const useUpdateCategoryStatus = () =>
    useToggleStatus(KEY, API.UPDATE_STATUS, "accounting_system_id", "accounting_system");
  