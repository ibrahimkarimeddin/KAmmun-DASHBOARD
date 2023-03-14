import React from "react";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
import { SelectField, ValidatedField } from "components/input";
import ImagePreview from "components/ImagePreview";
import { useImagePreview } from "hooks";
import { baseURL } from "api/config";
import { useGetWareHouses } from "api/admin";
import { convert_data_to_select } from "views/pages/admins/form/formUtils";


const ModelForm = () => {
  const t = useTranslation();
  const formik = useFormikContext();
  const {data} = useGetWareHouses()

  const { preview, handleImageChange } = useImagePreview(formik.getFieldProps('image').value?baseURL+'/images/'+formik.getFieldProps('image').value:null);

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2} className="p-2">
      <Col>
      <ValidatedField id="title" type="text" label={t("title")} name="title"   placeholder={t('title')}/>
      <ValidatedField id="description" type="text" label={t("description")} name="description"   placeholder={t('description')}/>
      <ValidatedField id="expiration_date" type="datetime-local" label={t("expiration_date")} name="expiration_date"/>
      <SelectField label={t("warehouse")}options={convert_data_to_select(data)} name="warehouse_id"
       onChange={(opt) => { formik.setFieldValue("warehouse_id", opt.value)}} required/>
      </Col>
      <Col>
      <ValidatedField id="image" type="file" label={t("image")} name="image" accept="image/*"
       onChange={(e) => {handleImageChange(e);formik.setFieldValue("image", e.target.files[0]); }} />
        <ImagePreview preview={preview} height="220" />
    </Col>
    </Row>
  );
};

export default ModelForm;
