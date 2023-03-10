import * as Yup from "yup";

export const getInitialValues = (objectToEdit = null) => {
  return {
    role:'',
    role_name:"",
    points:"",
    name:"",
    level_id:""
  };
};

export const getValidationSchema = (editMode = false) => {
  return Yup.object().shape({
   
    role_name:"",
    name:Yup.string().when("role_name", {
        is: (role_name) => role_name === 'shopper',
        then: Yup.string().required('Required')
    }),
    points:Yup.string().when("role_name", {
        is: (role_name) => role_name === 'shopper',
        then: Yup.string().required('Required')
    }),
    level_id:Yup.string().when("role_name", {
        is: (role_name) => role_name === 'shopper',
        then: Yup.string().required('Required')
    }),
    
  });
};





export const change_string_shape = (string) =>{
    let new_string =string
    for (var i = 0; i < new_string.length; i++) {
     
        new_string = new_string.replace(',' , ';')
      }

      return new_string 
}