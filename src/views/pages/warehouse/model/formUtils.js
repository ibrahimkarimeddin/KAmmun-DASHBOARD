import * as Yup from "yup";

export const getInitialValues = (objectToEdit) => {
  return {
    name:objectToEdit?.name??"",
    description:objectToEdit?.description??"",
    number_of_workers:objectToEdit?.number_of_workers??"",
    work_start_time:objectToEdit?.work_start_time??"",
    work_end_time:objectToEdit?.work_end_time??"",
    friday_start_time:objectToEdit?.friday_start_time??"",
    friday_end_time:objectToEdit?.friday_end_time??"",
    is_active:objectToEdit?.is_active??"",


  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required('Required'),


  });
};



export const AddSecondToValue  = (StringTime) =>{

   return  StringTime ==='' ? '00:00:00':StringTime + ":00"
}
export const convert_data_to_select_account_system = (array=[])=>{
  let new_array = []

  array.map(e => new_array.push({label:e?.system_name_ar, value:e?.id}))

  return new_array
}