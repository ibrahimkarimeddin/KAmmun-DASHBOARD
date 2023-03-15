import * as Yup from "yup";
import { buildFormData } from "api/helpers";

export const getInitialValues = (objectToEdit = null) => {
  if (!objectToEdit) {
    return {  
      coupon_code:"",
      msg_content:"",
      description:"",
      description_user:"",
      expiration_date:"",
      expiration_period:"",
      amount:"",
      max_cost:"",
      min_cost:"",    
      usage_limit:"",
      is_for_delivery:1,
      is_percentage_coupon:1,
      is_all_city:1,
      is_general:1

    };
  }

  return {
    coupon_code:objectToEdit?.coupon_code ??'',
    msg_content:objectToEdit?.msg_content??'',
    description:objectToEdit?.description ??'',
    usage_limit:objectToEdit?.usage_limit??'',
    description_user:objectToEdit?.description_user ??'',
    expiration_date:objectToEdit?.expiration_date ??'',
    expiration_period:objectToEdit?.expiration_period??'',
    amount:objectToEdit?.amount??'',
    max_cost:objectToEdit?.max_cost ??'',
    min_cost:objectToEdit?.min_cost ??'',    
    is_for_delivery:objectToEdit?.is_for_delivery ??0,
    is_percentage_coupon:objectToEdit?.is_percentage_coupon??0,
    is_all_city:objectToEdit?.is_all_city ??0,
    is_general:objectToEdit?.is_general ??0
  };
};

export const getValidationSchema = (editMode = false) => {
  return Yup.object().shape({
      msg_content:Yup.string().required('Required'),
      description_user:Yup.string().required('Required'),
      expiration_date:Yup.string().required('Required'),
      expiration_period:Yup.string().required('Required'),
      amount:Yup.string().required('Required'),
      max_cost:Yup.string().required('Required'),
      min_cost:Yup.string().required('Required'),    
      is_for_delivery:Yup.string().required('Required'),
      is_percentage_coupon:Yup.string().required('Required'),
      is_all_city:Yup.string().required('Required'),
      is_general:Yup.string().required('Required')

  })
};

export const getDataToSend = (values) => {
  const data = { ...values };
  if (values.image === "") {
    delete data["category_image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
