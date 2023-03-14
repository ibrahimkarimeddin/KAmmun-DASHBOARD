import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";

const FormModal = ({editMode = false }) => {
  const t = useTranslation();
  const formik = useFormikContext();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
  
        <ValidatedField
          name="category_sort"
          label={t("sort")}
          placeholder={t("sort")}
          type="number"
        />
      </Col>
      <Col>
  
        <ValidatedField
          name="category_sort"
          label={t("sort")}
          placeholder={t("sort")}
          type="number"
        />
      </Col>
    </Row>
  );
};




export default FormModal