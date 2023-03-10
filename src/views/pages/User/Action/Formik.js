import { buildFormData } from "api/helpers";
import * as Yup from "yup";
export const getInitialValues = (objectToEdit) => {
  return {
    name: objectToEdit?.name ?? '',
    phone: objectToEdit?.phone ?? '',
    platform: objectToEdit?.platform ?? '',
    supported_city: objectToEdit?.supported_city ?? '',
    limit_total_cost: objectToEdit?.limit_total_cost ?? '',
    warehouse:objectToEdit?.warehouse??"",
    order_count:objectToEdit?.order_count??"",

  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({


  });
};


export const getDataToSend = (values) => {
  const formData = new FormData();
if(typeof values['image'] ==='string' ){
  delete  values['image'];
}else{
values['_method'] ="PUT"
}
  const objectToSend = {
    ...values,
  };
  

  buildFormData(formData, objectToSend);
  return formData;
};


