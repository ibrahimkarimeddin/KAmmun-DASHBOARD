import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { Formik, Form } from "formik";
import Tabs from "components/Tabs";
import { getInitialValues, getValidationSchema } from "./form/formUtils";

import { LoadingButton } from "components/input/LoadingButton";

import { history } from "../../../history";

import ProgressBar from "components/ProgressBar";

import AuthComponent from "components/AuthComponent";
import useFormTabs from "./useFormTabs";
import { useAddAdmin } from "api/admin";

const AddAdminPage = (props) => {
  const t = useTranslation();
  const {isLoading:Loading,isError,isSuccess,percentCompleted ,mutate} = useAddAdmin()

  const tabs = useFormTabs('add');

  React.useEffect(() => {
    
  if(isSuccess){
    history.push('/dashboard/admin')
  }
   
  }, [isSuccess])
  
  
  const handelsubmit = (values)=>{
    mutate(values)
  
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
        
           <Formik
          onSubmit={handelsubmit}
          initialValues={getInitialValues()}
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
                    {t("add")}
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


export default AddAdminPage;
