import { buildFormData } from "api/helpers";
import * as Yup from "yup";

export const getInitialValues = (objectToEdit) => ({
    name: objectToEdit?.name ?? '',
    

  });

export const getValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required('Required'),  


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


