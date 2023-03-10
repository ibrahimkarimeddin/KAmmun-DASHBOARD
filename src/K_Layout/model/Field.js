import { baseURL } from 'api/config';
import ImagePreview from 'components/ImagePreview';
import { SelectField, ValidatedField } from 'components/input';
import { useFormikContext } from 'formik';
import { useImagePreview } from 'hooks';
import { useTranslation } from 'utility/language'
export  function Field({ item }) {
    const t = useTranslation();

  return (
    <ValidatedField
      id={item?.name}
      type={item?.type} 
      label={t(item?.name)}
      name={item?.name}
      placeholder={t(item?.name)}
    />
  );
};

export  function FieldImg({ item }) {
    const formik = useFormikContext();
    const { preview, handleImageChange } = useImagePreview(formik.getFieldProps(`${item?.name}`).value?baseURL+'/images/'+formik.getFieldProps(`${item?.name}`).value:null);
    const t = useTranslation();
    return (
        <>
        <ValidatedField id={item?.name} type="file" label={t(item?.name)} name={item?.name} accept="image/*"
        onChange={(e) => {handleImageChange(e);formik.setFieldValue(`${item?.name}`, e.target.files[0]); }} />
         <ImagePreview preview={preview} height={item?.height} />
        </>
        
    );
  }
  
export  function FieldOption({ item }) {
    const t = useTranslation();
    const formik = useFormikContext();
  return (
  <>
 <SelectField label={t(item?.name)} options={convert_data_to_select(item?.option)} name={item?.name}
    onChange={(opt) => { formik.setFieldValue(item?.name, opt.value) }} required />
  </>
          

  );
};
export  function FieldNone({ item }) {
  const t = useTranslation();

return (
  <div className="none">
     <ValidatedField
    id={item?.name}
    type={item?.type} 
    label={t(item?.name)}
    name={item?.name}
    placeholder={t(item?.name)}
  />
  </div>
 
);
};
export const filterDataByDynamicValue = (data, searchValue, searchKey) => {
  const lowercaseSearchValue = searchValue?.toLowerCase();

  let keys;
  if (searchKey?.includes('.')) {
    keys = searchKey.split('.');
  } else {
    keys = [searchKey];
  }

  return data.filter((item) => {
    let itemValue = item;

    for (const key of keys) {
      itemValue = itemValue[key];
    }

    const lowercaseItemValue = itemValue?.toLowerCase();

    if (lowercaseItemValue && lowercaseSearchValue) {
      return lowercaseItemValue.includes(lowercaseSearchValue);
    } else {
      return false;
    }
  });
};


export const convert_data_to_select = (array=[])=>{
  if (typeof array === 'undefined' || !Array.isArray(array)) {
    throw new Error("Expected an array argument")
  }
  let new_array = []

  array.map(e => new_array.push({label:e?.name, value:e?.id}))

  return new_array
}

export function convert_data_Search_select(selecter) {
  return selecter.map((option) => {
    const [value, label] = option.split(".");
    if (value && label) {
      return { value: option, label: `${value}` };
    } else {
      return { value: option, label: option };
    }
  });
}