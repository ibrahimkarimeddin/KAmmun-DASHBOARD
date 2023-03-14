import {useAddMutation,useGetQuery, useDeleteMutation2, useUpdateMutation2, useToggleStatus} from "./helpers";
  const API = {
    GET: `/api/dashboard/user/all`,
    ADD: `/api/user`,
    UPDATE: `/api/user/`,
    DELETE: `/api/user`,
    STATUS: `/api/dashboard/user/change_status`,
    SINGLE_USER:`/api/dashboard/user`,
    ORDER:`/api/dashboard/user/order`,
    Fav:`/api/dashboard/user/favourite_order`,
  };
  
  const KEY = "USER";
  const KEY2 = "USER2";

  export const useGetUser = (params) => useGetQuery(KEY, API.GET, params);
  export const useGetSingleuser=(params)=>useGetQuery(KEY,API.SINGLE_USER, params);
  export const useUpdateUser = (params) => useUpdateMutation2(KEY, API.UPDATE+params);
  export const useAddUser = () =>useAddMutation(KEY, API.ADD );
  export const useDeleteUser = () =>useDeleteMutation2(KEY, API.DELETE);
  export const useUpdateUserstatus = () => useToggleStatus(KEY, API.STATUS,'user_id')
  export const useGetUserOrder = (params) => useGetQuery(KEY, API.ORDER, params)
  export const useGetUserFavourite = (params) => useGetQuery(KEY2, API.Fav, params)

