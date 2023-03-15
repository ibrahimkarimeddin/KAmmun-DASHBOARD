import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/dashboard/coupon`,
    GET_ALL: `/api/dashboard/coupon/all`,
    ADD: `/api/dashboard/coupon/add`,
    UPDATE: `/api/dashboard/coupon/edit`,
    DELETE: `/api/dashboard/coupon/delete`,
    UPDATE_STATUS: `/api/dashboard/coupon/update_category_status`,
  };
  
  const KEY = "COUPON";
  export const useGetAllCoupon = () => useGetQuery(KEY, API.GET_ALL);
  export const useAddCoupon = () => useAddMutation(KEY, API.ADD);
  export const useUpdateCoupon = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteCoupon = () =>
    useDeleteMutation(KEY, API.DELETE, "coupon_id", "categories");
  export const useUpdateCategoryStatus = () =>
    useToggleStatus(KEY, API.UPDATE_STATUS, "category_id", "categories");
  