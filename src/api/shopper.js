import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "./helpers";
  
  const API = {
    GETLEVEL: `/api/dashboard/shopper/level`,
    ADD: `/api/admin/role/add`,
    UPDATE: `/api/admin/role/update`,
    DELETE: `/api/admin/role/delete`,
    UPDATE_STATUS: `/api/admin/role/update_category_status`,
  };
  
  const KEY = "SHOPPER";

  export const useGetShopperLevel = () => useGetQuery(KEY, API.GETLEVEL);




  export const useAddCategory = () => useAddMutation(KEY, API.ADD);
  export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteCategory = () =>
    useDeleteMutation(KEY, API.DELETE, "category_id", "role");
  export const useUpdateCategoryStatus = () =>
    useToggleStatus(KEY, API.UPDATE_STATUS, "category_id", "role");
  