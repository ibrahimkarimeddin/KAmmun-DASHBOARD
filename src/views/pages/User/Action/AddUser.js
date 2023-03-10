import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { Formik, Form } from "formik";
// import Tabs from "components/Tabs";
import { getInitialValues, getValidationSchema } from "./Formik";

import { LoadingButton } from "components/input/LoadingButton";

import { history } from "../../../../history";

import ProgressBar from "components/ProgressBar";

import AuthComponent from "components/AuthComponent";
// import useFormTabs from "./useFormTabs";
import { useAddUser } from "api/User";

const AddUserPage = (props) => {
  const t = useTranslation();
  const {isLoading:Loading,isError,isSuccess,percentCompleted ,mutate} = useAddUser()

  // const tabs = useFormTabs('add');

  React.useEffect(() => {
    
  if(isSuccess){
    history.push('/user')
  }
   
  }, [isSuccess])
  
  
  const handelsubmit = (values)=>{
    mutate(values)
  
  }
  

  return (
    <Card>
      <CardHeader>
        <CardTitle style={{display:"flex"  , flexDirection:"column" , justifyContent:"center"}}>
          {t("User_information")}
        </CardTitle>
       
        <Button
          color="primary"
          onClick={() => history.push('/User')}
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
              {/* <Tabs tabs={tabs} /> */}
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


export default AddUserPage;
