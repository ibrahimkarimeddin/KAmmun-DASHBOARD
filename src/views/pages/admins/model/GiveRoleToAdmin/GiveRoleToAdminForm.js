import React from "react";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
import { useGetWareHouses } from "api/admin";
import { useGetRole } from "api/role";
import { SelectField, ValidatedField } from "components/input";
import { convert_data_to_select } from "../../form/formUtils";
import { useGetShopperLevel } from "api/shopper";

const GiveRoleToAdminForm = ({}) => {
  const t = useTranslation();
  const formik = useFormikContext();
  const { data } = useGetRole();
  const { data:level } = useGetShopperLevel();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <SelectField
          label={t("role")}
          options={convert_data_to_select(data)}
          name="role"
          onChange={(opt) => {
            formik.setFieldValue("role", opt.value);
            formik.setFieldValue("role_name", opt.label);
          }}
          isRequired
        />
        {formik.getFieldProps("role_name").value === "shopper" && (
          <div>
            <SelectField
              label={t("level")}
              options={convert_data_to_select(level)}
              name="level_id"
              onChange={(opt) => {
                formik.setFieldValue("level_id", opt.value);
              }}
              isRequired
            />
        
          </div>
        )}
      </Col>
      <Col>
        {formik.getFieldProps("role_name").value === "shopper" && (
          <div>
            <ValidatedField
              name={`name`}
              label={t("name")}
              placeholder={t("name")}
                
            />
            <ValidatedField
              name="points"
              label={t("points")}
              placeholder={t("points")}
              type="number"
              isRequired
            />
        
          </div>
        )}
      </Col>
    </Row>
  );
};

export default GiveRoleToAdminForm;
