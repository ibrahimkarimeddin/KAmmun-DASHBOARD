import {useAddMutation,useGetQuery, useDeleteMutation2, useUpdateMutation2} from "./helpers";
  const API = {
    GET: `/api/dashboard/category/all`,
    ADD: `/api/category`,
    UPDATE: `/api/category/`,
    DELETE: `/api/category`,
  };
  
  const KEY = "Category";
  export const useGetCategory = (params) => useGetQuery(KEY, API.GET, params);
  export const useUpdateCategory = (params) => useUpdateMutation2(KEY, API.UPDATE+params);
  export const useAddCategory = () =>useAddMutation(KEY, API.ADD );
  export const useDeleteCategory = () =>useDeleteMutation2(KEY, API.DELETE);

