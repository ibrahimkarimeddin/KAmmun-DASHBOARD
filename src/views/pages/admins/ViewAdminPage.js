import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { Formik, Form } from "formik";
import Tabs from "components/Tabs";
import { change_values_shap, getInitialValues, getValidationSchema } from "./form/formUtils";

import { buildFormData } from "api/helpers";
import { LoadingButton } from "components/input/LoadingButton";

import { history } from "../../../history";

import ProgressBar from "components/ProgressBar";

import AuthComponent from "components/AuthComponent";
import useFormTabs from "./useFormTabs";
import { useGetSingleAdmin, useUpdateSingleAdmin } from "api/admin";
import { useParams } from "react-router-dom";
import SpinnerComponent from "components/@vuexy/spinner/Fallback-spinner";

const ViewAdminPage = (props) => {
  const t = useTranslation();
  const {id} = useParams()
  const {data, isLoading} = useGetSingleAdmin({admin_id:id})
  const {isLoading:Loading,isError,isSuccess,percentCompleted ,mutate} = useUpdateSingleAdmin(id)

  const tabs = useFormTabs('view',data);

  const handelsubmit = (values)=>{
    mutate(values)
  }
  
if(isLoading){
  return <SpinnerComponent />
}
  return (
    <Card>
      <CardHeader>
        <CardTitle style={{display:"flex"  , flexDirection:"column" , justifyContent:"center"}}>
          {t("admin_information")}
        </CardTitle>
       
        <Button
          color="primary"
          onClick={() => history.push('/dashboard/admin')}
        >
          {t("back")}
        </Button>
      </CardHeader>
      <CardBody>
        {
          data &&
           <Formik
          onSubmit={handelsubmit}
          initialValues={getInitialValues(data)}
          validationSchema={getValidationSchema()}
        >
          {(formik) => (
            <Form>
              <Tabs tabs={tabs} />
              <AuthComponent> 
                
                <ProgressBar
                  value={percentCompleted}
                  isLoading={Loading}
                  isError={isError}
                  isSuccess={isSuccess}
                />
                <div className="d-flex justify-content-center align-items-center">
                  <LoadingButton
                    type="submit"
                    color="primary"
                    isLoading={Loading}
                  >
                    {t("save")}
                  </LoadingButton>
                </div>
              </AuthComponent>
            </Form>
          )}
        </Formik>
        }
       
      </CardBody>
    </Card>
  );
};


export default ViewAdminPage;
