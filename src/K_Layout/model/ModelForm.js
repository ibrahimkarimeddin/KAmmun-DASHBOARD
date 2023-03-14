import React from "react";
import { Row, Col } from "reactstrap";
import {Field,FieldImg, FieldNone, FieldOption} from "./Field";
const ModelForm = ({ ModelData }) => {
  const col1Items = ModelData?.filter(item => item.col === 1);
  const col2Items = ModelData?.filter(item => item.col === 2);
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2} className="p-2" >
      <Col>
        {col1Items.map((item,index) => {
          const { type } = item;
          switch (type) {
            case "none":
              return <FieldNone key={index} item={item}  />;
            case "select":
              return <FieldOption key={index} item={item}  />;
            case "image":
              return <FieldImg key={index} item={item}   />;
            default:
              return <Field key={index} item={item}  />;
          }
        })}
      </Col>
      {col2Items.length > 0 && (
        <Col>
          {col2Items.map((item,index) => {
            const { type } = item;
            switch (type) {
              case "none":
                return <FieldNone key={index} item={item}  />;
              case "select":
                return <FieldOption key={index} item={item}  />;
              case "image":
                return <FieldImg key={index} item={item}  />;
              default:
                return <Field key={index} item={item}  />;
            }
          })}
        </Col>
      )}
    </Row>
  );
};

export default ModelForm;
