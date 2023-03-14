import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
import { Check } from "react-feather";
import Checkbox from "components/@vuexy/checkbox/CheckboxesVuexy";
import { SelectField } from "components/input";
import { convert_data_to_select } from "../admins/form/formUtils";

const FormModal = ({editMode = false }) => {
  const t = useTranslation();
  const formik = useFormikContext();
const data = []
  return (
    <Row xs={1} sm={1} md={2} lg={3} xl={3}>
      <Col>
   
        <ValidatedField
          name="coupon_code"
          label={t("coupon_code")}
          placeholder={t("coupon_code")}
          type="text"
        />
        
        <ValidatedField
          name="msg_content"
          label={t("msg_content")}
          placeholder={t("msg_content")}
          type="text"
        />
        
        <ValidatedField
          name="description"
          label={t("description")}
          placeholder={t("description")}
          type="text"
        />
        
        
        <ValidatedField
          name="description_user"
          label={t("description_user")}
          placeholder={t("description_user")}
          type="text"
        />
          <div style={{display:'flex' , justifyContent:"space-between"}}>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label={t("is_invitation")}
            checked={formik.values.is_invitation}
            onChange={() =>
              formik.setFieldValue("is_invitation", !formik.values.is_invitation)
            }            
          />
            <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label={t("is_all_city")}
            checked={formik.values.is_all_city}
            onChange={() =>
              formik.setFieldValue("is_all_city", !formik.values.is_all_city)
            }            
          />
          </div>
          <div style={{display:'flex' , justifyContent:"space-between"}}>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label={t("is_percentage_coupon")}
            checked={formik.values.is_percentage_coupon}
            onChange={() =>
              formik.setFieldValue("is_percentage_coupon", !formik.values.is_percentage_coupon)
            }            
          />
            <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label={t("is_general")}
            checked={formik.values.is_general}
            onChange={() =>
              formik.setFieldValue("is_general", !formik.values.is_general)
            }            
          />
          </div>
      </Col>
      <Col>
  
      <ValidatedField
          name="expiration_date"
          label={t("expiration_date")}
          placeholder={t("expiration_date")}
          type="date"
        />
        
        <ValidatedField
          name="expiration_period"
          label={t("expiration_period")}
          placeholder={t("expiration_period")}
          type="number"
        />
        
        <ValidatedField
          name="user_usage_limit"
          label={t("user_usage_limit")}
          placeholder={t("user_usage_limit")}
          type="number"
        />
        <ValidatedField
          name="amount"
          label={t("amount")}
          placeholder={t("amount")} 
          type="number"
        />
           <SelectField
          label={t("warehouse")}
          options={convert_data_to_select(data)}
          name="warehouse_id"
          onChange={(opt) => {

            formik.setFieldValue("warehouse_id", opt.value);
          }}
          required
          
        />
      </Col>
      <Col>
      <ValidatedField
      name="min_cost"
      label={t("min_cost")}
      placeholder={t("min_cost")}
      type="number"
    />
  <ValidatedField
      name="max_cost"
      label={t("max_cost")}
      placeholder={t("max_cost")}
      type="date"
    />
    
  
    
    <ValidatedField
      name="user_usage_limit"
      label={t("user_usage_limit")}
      placeholder={t("user_usage_limit")}
      type="number"
    />
    <ValidatedField
      name="amount"
      label={t("amount")}
      placeholder={t("amount")}
      type="number"
    />
       <SelectField
          label={t("warehouse")}
          options={convert_data_to_select(data)}
          name="warehouse_id"
          onChange={(opt) => {

            formik.setFieldValue("warehouse_id", opt.value);
          }}
          required
          
        />
  </Col>
    </Row>
  );
};




export default FormModal