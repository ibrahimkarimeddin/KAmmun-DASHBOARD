import * as Yup from "yup";

export const getInitialValues = (objectToEdit) => {
  return {
    name:objectToEdit?.name??"",
 

  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required('Required'),


  });
};



