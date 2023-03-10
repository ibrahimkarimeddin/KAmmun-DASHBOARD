import { buildFormData } from "api/helpers";
import * as Yup from "yup";
export const getInitialValues = (objectToEdit) => {
  return {
    name: objectToEdit?.name ?? '',
    delivery_price: objectToEdit?.delivery_price ?? '',
    is_active: objectToEdit?.is_active ?? '',
    warehouse_id: objectToEdit?.warehouse_id ?? '',
    support_phone_number: objectToEdit?.support_phone_number ?? '',
    coupon_type_id:objectToEdit?.coupon_type_id??"",
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


