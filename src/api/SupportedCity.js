import {useAddMutation,useGetQuery, useDeleteMutation_Delet,useUpdatedynamik} from "./helpers";
  const API = {
    GET: `/api/supported_city`,
    ADD: `/api/supported_city`,
    UPDATE: `/api/supported_city/`,
    DELETE: `/api/supported_city/`,
  };
  
  const KEY = "SupportedCity";
  const KEY2 = "SupportedCity2";

  export const useGetSupportedCity = (params) => useGetQuery(KEY, API.GET, params);
  export const useUpdateSupportedCity = () => useUpdatedynamik(KEY2, API.UPDATE);
  export const useAddSupportedCity = () =>useAddMutation(KEY, API.ADD );
  export const useDeleteSupportedCity = () =>useDeleteMutation_Delet(KEY2, API.DELETE);

