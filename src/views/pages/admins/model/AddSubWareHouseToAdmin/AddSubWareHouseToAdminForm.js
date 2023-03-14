import React from "react";
import { SelectField } from "components/input/SelectField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
import { convert_data_to_select } from "../../form/formUtils";
import { useGetWareHouses } from "api/admin";
import MultiSelectSort from "./MultiSelect";

const AddSubWareHouseToAdminForm = ({}) => {
  const t = useTranslation();
  const formik = useFormikContext();
  const {data} = useGetWareHouses()



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <SelectField
        label={t("warehouse")}
        options={convert_data_to_select(data)}
        name="warehouse_id"
        onChange={(opt) => {
          formik.setFieldValue("warehouse_id", opt.value);
          formik.setFieldValue("sub_warehouse_ids", "");
        }}
        isRequired
      />
  
      </Col>
        <Col>
        <MultiSelectSort/>
      </Col>
    </Row>
  );
};

export default AddSubWareHouseToAdminForm;
