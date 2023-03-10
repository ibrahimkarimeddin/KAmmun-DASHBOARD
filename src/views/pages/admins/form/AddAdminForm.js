import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import ImagePreview from "components/ImagePreview";
import { Row, Col } from "reactstrap";
import Checkbox from "components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import { SelectField } from "components/input";
import { useGetWareHouses } from "api/admin";
import { convert_data_to_select } from "./formUtils";



const AddAdminForm = () => {
  const t = useTranslation();
  const formik = useFormikContext()
  const {data} = useGetWareHouses()

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
          
          required
        />
          {/* <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label={t("is_super_user")}
            checked={formik.values.is_super_user}
            onChange={() =>
              formik.setFieldValue("is_super_user", !formik.values.is_super_user)
              
            }
            
            
          /> */}

       
      </Col>
      <Col>
       <SelectField
          label={t("warehouse")}
          options={convert_data_to_select(data)}
          name="warehouse_id"
          onChange={(opt) => {

            formik.setFieldValue("warehouse_id", opt.value);
          }}
          required
          
        />
      <label>{t('admin_image')}</label>
        <ImagePreview preview={'/download.png'} />
        <p style={{color:'white' , marginBottom:-3}}>d</p>
       
        
      </Col>
    </Row>
  );
};

export default AddAdminForm;
