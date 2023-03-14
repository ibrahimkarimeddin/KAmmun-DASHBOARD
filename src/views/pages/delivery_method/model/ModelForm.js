import React from "react";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
import {  ValidatedField } from "components/input";

const ModelForm = () => {
  const t = useTranslation();
  const formik = useFormikContext();

  return (
    <Row xs={1} sm={1} md={1} lg={1} xl={1} className="p-2">
      <Col>
      <ValidatedField id="name" type="text" label={t("name")} name="name"   placeholder={t('name')}/>
      </Col>
     
    </Row>
  );
};

export default ModelForm;
