import {useAddMutation,useGetQuery, useDeleteMutation2, useUpdateMutation2} from "./helpers";
  const API = {
    GET: `/api/banner`,
    ADD: `/api/banner`,
    UPDATE: `/api/banner/`,
    DELETE: `/api/banner`,
  };
  
  const KEY = "Banner";
  export const useGetBanner = (params) => useGetQuery(KEY, API.GET, params);
  export const useUpdateBanner = (params) => useUpdateMutation2(KEY, API.UPDATE+params);
  export const useAddBanner = () =>useAddMutation(KEY, API.ADD );
  export const useDeleteBanner = () =>useDeleteMutation2(KEY, API.DELETE);

