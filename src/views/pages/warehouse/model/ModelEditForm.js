import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
import { SelectField } from "components/input";
import { useGetAccountingSystem } from "api/accountingSystem";

const ModelEditForm = () => {
  const t = useTranslation();
  const formik = useFormikContext();
  const {data} = useGetAccountingSystem()
  const Active= [{label:`${t("true")}` , value:1 },{label:`${t("false")}` , value:0}]

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <ValidatedField
          name="name"
          label={`${t("name")} `}
          placeholder={`${t("name")} `}
        />
        <ValidatedField

          name="description"
          label={`${t("description")}`}
          placeholder={`${t("description")}`}
        />
     
       
      </Col>
      <Col>
      <ValidatedField
          type="number"
          name="number_of_workers"
          label={`${t("number_of_workers")}`}
          placeholder={`${t("number_of_workers")}`}
        />
        <SelectField
          label={t("is_active")}
          options={Active}
          name="is_active"
          onChange={(opt) => { formik.setFieldValue("is_active", opt.value) }}
          required 
          />
     
        </Col>
    </Row>
  );
};

export default ModelEditForm;
