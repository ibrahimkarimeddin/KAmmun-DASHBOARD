import {useAddMutation,useGetQuery, useDeleteMutation2, useUpdateMutation, useUpdateMutation2} from "./helpers";
  const API = {
    GET: `/api/delivery_method`,
    ADD: `/api/delivery_method`,
    UPDATE: `/api/delivery_method/`,
    DELETE: `/api/delivery_method`,
  };
  
  const KEY = "delivery_method";
  export const useGetDelivery_method = (params) => useGetQuery(KEY, API.GET, params);
  export const useUpdateDelivery_method = (params) =>useUpdateMutation2(KEY, API.UPDATE+params );
  export const useDeleteDelivery_method = (params) =>useDeleteMutation2(KEY, API.DELETE+`/`);
  export const useAddDelivery_method = () =>useAddMutation(KEY, API.ADD);
