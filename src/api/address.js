import {useAddMutation,useGetQuery, useDeleteMutation2, useUpdateMutation2} from "./helpers";
  const API = {
    GET: `/api/address`,
    ADD: `/api/address`,
    UPDATE: `/api/address/`,
    DELETE: `/api/address`,
  };
  
  const KEY = "Address";
  export const useGetAddress = (params) => useGetQuery(KEY, API.GET, params);
  export const useUpdateAddress = (params) => useUpdateMutation2(KEY, API.UPDATE+params);
  export const useAddAddress = () =>useAddMutation(KEY, API.ADD );
  export const useDeleteAddress = () =>useDeleteMutation2(KEY, API.DELETE);

