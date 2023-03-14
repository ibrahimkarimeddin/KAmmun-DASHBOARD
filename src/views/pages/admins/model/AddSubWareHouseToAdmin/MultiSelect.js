import { useGetSubWareHouses } from "api/admin";
import { Field, useFormikContext } from "formik";
import React from "react";
import Select, { components } from "react-select";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { useTranslation } from "utility/language";
import { convert_data_to_select } from "../../form/formUtils";

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
const SortableMultiValue = SortableElement(props => {
  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});
const SortableSelect = SortableContainer(Select);
export default function MultiSelectSort() {
  const formik =  useFormikContext()
  const {data} = useGetSubWareHouses()

  const [selected, setSelected] = React.useState(formik?.values?.sub_warehouse_ids ||[]);
  console.log(formik?.values?.sub_warehouse_ids)
const onChange = (selectedOptions=[] )=> {
  setSelected((selectedOptions))
  
  formik.setFieldValue('sub_warehouse_ids' ,selectedOptions.map(e=>e.value))
};
const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
   
  };
  const t = useTranslation()
return (
   <>
   <label>
    {t('sub_warehouse')}
   </label>
    <SortableSelect
    
    axis="xy"
    onSortEnd={onSortEnd}
    distance={4}
    getHelperDimensions={({ node }) => node.getBoundingClientRect()}
    isMulti
    options={convert_data_to_select(data?.filter(
        (opt) => opt.warehouse_id === formik.values.warehouse_id
      ))}  
    value={selected}
    onChange={onChange}
    components={{
      MultiValue: SortableMultiValue
    }}
    closeMenuOnSelect={false}
  />
  <Field
  name="sub_warehouse_ids" 
  style={{visibility: "hidden"}}
  />
   </>
  );
}