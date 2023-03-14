import { buildFormData } from "api/helpers";
import * as Yup from "yup";

export const getInitialValues = (objectToEdit) => {
  return {
    title:objectToEdit?.title??"",
    description:objectToEdit?.description??"",
    image:objectToEdit?.image_file_name??"",
    expiration_date:objectToEdit?.expiration_date??"",
    warehouse_id:objectToEdit?.warehouse_id??"",

  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    expiration_date: Yup.string().required('Required'),
    warehouse_id: Yup.string().required('Required'),

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


