import {useAddMutation,useGetQuery, useDeleteMutation2, useUpdateMutation2, useToggleStatus} from "./helpers";
  const API = {
    GET: `/api/dashboard/user/all`,
    ADD: `/api/user`,
    UPDATE: `/api/user/`,
    DELETE: `/api/user`,
    STATUS: `/api/dashboard/user/change_status`,

  };
  
  const KEY = "USER";
  export const useGetUser = (params) => useGetQuery(KEY, API.GET, params);
  export const useUpdateUser = (params) => useUpdateMutation2(KEY, API.UPDATE+params);
  export const useAddUser = () =>useAddMutation(KEY, API.ADD );
  export const useDeleteUser = () =>useDeleteMutation2(KEY, API.DELETE);
  export const useUpdateUserstatus = () => useToggleStatus(KEY, API.STATUS,'user_id')

