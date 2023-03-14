import * as Yup from "yup";

export const getInitialValues = (objectToEdit = null) => {
  return {
    warehouse_id:objectToEdit?.warehouse?.id,
    sub_warehouse_ids:convert_data_to_select(objectToEdit?.subWarehouses)
  };
};

export const getValidationSchema = (editMode = false) => {
  return Yup.object().shape({
   

    
  });
};





export const change_string_shape = (string) =>{
    let new_string =string
    for (var i = 0; i < new_string.length; i++) {
     
        new_string = new_string.replace(',' , ';')
      }

      return new_string 
}
export const convert_data_to_select = (array=[])=>{
  let new_array = []

  array.map(e => new_array.push({label:e?.name, value:e?.id}))

  return new_array
}