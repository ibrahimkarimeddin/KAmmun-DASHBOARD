import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import ImagePreview from "components/ImagePreview";
import { Row, Col } from "reactstrap";
import { SelectField } from "components/input";

const ModelForm = () => {
  const t = useTranslation();
  const formik = useFormikContext();
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

      <Col>
        <ValidatedField
          type="time"
          name="friday_start_time"
          label={`${t("friday_start_time")}`}
          placeholder={`${t("friday_start_time")}`}
        />
        <ValidatedField
          type="time"
          name="friday_end_time"
          label={`${t("friday_end_time")}`}
          placeholder={`${t("friday_end_time")}`}
        />
        <ValidatedField
          type="time"

          name="work_start_time"
          label={`${t("work_start_time")}`}
          placeholder={`${t("work_start_time")}`}
        />
        <ValidatedField
          type="time"

          name="work_end_time"
          label={`${t("work_end_time")}`}
          placeholder={`${t("work_end_time")}`}
        />

      </Col>
    </Row>
  );
};

export default ModelForm;
