import { buildFormData } from "api/helpers";
import * as Yup from "yup";
export const getInitialValues = (objectToEdit) => {
  return {
    supported_city_id: objectToEdit?.supported_city_id ?? '',
    street: objectToEdit?.street ?? '',
    building: objectToEdit?.building ?? '',
    entrance: objectToEdit?.entrance ?? '',
    floor: objectToEdit?.floor ?? '',
    address_title:objectToEdit?.address_title??"",
    longitude:objectToEdit?.longitude??"",
    latitude:objectToEdit?.latitude??"",
    description:objectToEdit?.description??"",


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


