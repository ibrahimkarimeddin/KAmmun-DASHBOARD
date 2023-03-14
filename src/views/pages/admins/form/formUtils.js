import * as Yup from "yup";
import { buildFormData } from "api/helpers";
import { baseURL } from "api/config";

export const getInitialValues = (objectToEdit) => {
  if(!objectToEdit){
    return {
      username:"",
      phone:"",
      is_super_user:"",
      name:"",
      warehouse_id:'',
      password:""
        
    };
  }
  return {
    username:objectToEdit?.username,
    phone:objectToEdit?.phone,
    is_super_user:objectToEdit?.is_super_user,
    name:objectToEdit?.name,
    warehouse_id:objectToEdit?.warehouse?.id,
    
    password:""

      
  };

};

export const getValidationSchema = (editMode = false) => {
  return Yup.object().shape({
      

  });
};

export const getDataToSend = (values) => {
  const data = { ...values };
  if (values.subcategory_image === "") {
    delete data["subcategory_image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
export const selectFailGender = [
  {value : "female" , label:"female"},
  {value:"male" , label:"male"}
] 


export const change_values_shap = (object)=>{

 const new_array = []


  delete object['car_color']
  delete object['code']
  delete object['car_seat_count']
  delete object['car_type']
  delete object['car_model']
  delete object['driver_birthday']
  delete object['driver_city']
  delete object['driver_gender']
  delete object['driver_image']
  delete object['driver_name']
  delete object['driver_wallet']
  delete object['driver_phone']
  delete object['driver_wallet']
  delete object['nationality_id']
  delete object['residential_card_number']
  delete object['yearly_id']
  delete object['license_id']


  for(const opt in object){
    new_array.push(object[opt])
  }
  return  new_array 
  

}

// export const convert_data_to_select = (array=[])=>{
//   let new_array = []

//   array.map(e => new_array.push({label:e?.name, value:e?.id}))

//   return new_array
// }
export const convert_data_to_select = (array=[])=>{
  if (typeof array === 'undefined' || !Array.isArray(array)) {
    throw new Error("Expected an array argument")
  }
  let new_array = []

  array.map(e => new_array.push({label:e?.name, value:e?.id}))

  return new_array
}