import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
import Checkbox from "components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import MultiSelectSort from "./MultiSelect";
const FormModal = ({editMode = false }) => {
  const t = useTranslation();
  const formik = useFormikContext();
  return (
    <Row xs={1} sm={1} md={1} lg={3} xl={3}>
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
      </Col>
      <Col>
      
      <ValidatedField
        name="expiration_date"
        label={t("expiration_date")}
        placeholder={t("expiration_date")}
        type="datetime-local"
      />
        <ValidatedField
        name="expiration_period"
        label={t("expiration_period")}
        placeholder={t("expiration_period")}
        type="number"
      />
        <ValidatedField
        name="amount"
        label={t("amount")}
        placeholder={t("amount")}
        type="number"
      />
        <ValidatedField
        name="max_cost"
        label={t("max_cost")}
        placeholder={t("max_cost")}
        type="number"
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
          name="usage_limit"
          label={t("usage_limit")}
          placeholder={t("usage_limit")}
          type="number"
        />
           <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label={t("is_for_delivery")}
                checked={formik.values.is_for_delivery}
                onChange={() =>
                  formik.setFieldValue("is_for_delivery", !formik.values.is_for_delivery)           
                }
              />
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label={t("is_percentage_coupon")}
                checked={formik.values.is_percentage_coupon}
                onChange={() =>
                  formik.setFieldValue("is_percentage_coupon", !formik.values.is_percentage_coupon)           
                }
              />
           </div>
           <div style={{display:"flex" , justifyContent:"space-between", marginTop:"16px"}}>
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label={t("is_general")}
                checked={formik.values.is_general}
                onChange={() =>
                  formik.setFieldValue("is_general", !formik.values.is_general)           
                }
              />
              <div style={{width:"47%"}}>
                   <Checkbox
                color="primary"
                style={{marginRight:"10px"}}
                icon={<Check className="vx-icon" size={16} />}
                label={t("is_all_city")}
                checked={formik.values.is_all_city}
                onChange={() =>
                  formik.setFieldValue("is_all_city", !formik.values.is_all_city)           
                }
              />
              </div>
           

           </div>
           {
            formik.getFieldProps('is_all_city').value ? null : <MultiSelectSort /> 
           }
         
          
      </Col>
    </Row>
  );
};




export default FormModal