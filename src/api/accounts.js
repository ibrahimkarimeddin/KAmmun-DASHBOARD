import {
  useGetQuery,
  useAddMutation,
  useUpdateMutation,
  useDeleteMutation,
  buildFormData,
} from "./helpers";

const API = {
  GET: `/api/admin/account/all`,
  GET_ALL_PER:`/api/admin/role/all-permissions` ,
  GET_ALL_ROLE:`/api/admin/role/all` ,
  ADD: `/api/admin/account/create`,
  GETWALLET:`/api/admin/account/get-wallet`,
  UPDATEWALLET:`/api/admin/account/add-to-wallet`,
  UPDATE: `/api/admin/account/update`,
  DELETE: `/api/admin/account/delete`,
  UPDATE_MY_ACCOUNT:`/api/admin/account/update-my-account`
};

const KEY = "ADMINS";
const MY_ACCOUNT="MY_ACCOUNT";
export const useGetAccounts = () => useGetQuery(MY_ACCOUNT, API.GET);
export const useGetWallet = () => useGetQuery("WALLET", API.GETWALLET);
export const useUpdateWallet = () => useAddMutation("WALLET", API.UPDATEWALLET);

export const useAddAccount = () => useAddMutation(MY_ACCOUNT, API.ADD);
export const useUpdateAccount = () => useUpdateMutation(MY_ACCOUNT, API.UPDATE);
export const useDeleteAccount = () =>
  useDeleteMutation(MY_ACCOUNT, API.DELETE, "account_id");

export const getDataToSend = (values) => {
  const formData = new FormData();
if(typeof values['image'] ==='string' ){
  delete  values['image'];
}
  const objectToSend = {
    ...values,
  };
  
  

  buildFormData(formData, objectToSend);
  return formData;
};
export const useUpdateMyAccount=()=>useUpdateMutation(MY_ACCOUNT,API.UPDATE_MY_ACCOUNT)
