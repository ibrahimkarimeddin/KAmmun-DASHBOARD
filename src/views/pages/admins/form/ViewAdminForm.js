import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import ImagePreview from "components/ImagePreview";
import { Row, Col } from "reactstrap";
import { useGetWareHouses } from "api/admin";
// import { convert_data_to_select } from "./formUtils";
// import { SelectField } from "components/input";
import { useFormikContext } from "formik";



const ViewAdminForm = () => {
  const t = useTranslation();
  // const formik = useFormikContext()
  // const {data} = useGetWareHouses()
  
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
          <ValidatedField
          name="username"
          label={t("username")}
          placeholder={t("username")}
          type="string"
          required
          
        />
       
          <ValidatedField
          name="name"
          label={t("name")}
          placeholder={t("name")}
          type="text"
          required
          
        />
          <ValidatedField
          name="phone"
          label={t("phone")}
          placeholder={t("phone")}
          type="text"
          
          required
        />
          <ValidatedField
          name="password"
          label={t("password")}
          placeholder={t("password")}
          type="text"
          
          
        />
       
       
         {/* <SelectField
          label={t("gender")}
          options={selectFailGender}
          name="driver_gender"
          onChange={(opt) => {
            formik.setFieldValue("driver_gender", opt.value);
          }}
          required
        /> */}
      </Col>
      <Col>
      {/* <SelectField
          label={t("warehouse")}
          options={convert_data_to_select(data)}
          name="warehouse_id"
          onChange={(opt) => {

            formik.setFieldValue("warehouse_id", opt.value);
          }}
          required
          readOnly
          isSearchable={ false }
          
        /> */}
      <label>{t('admin_image')}</label>
        <ImagePreview preview={'/download.png'} />
        <p style={{color:'white' , marginBottom:-3}}>d</p>
       
        
      </Col>
    </Row>
  );
};

export default ViewAdminForm;
