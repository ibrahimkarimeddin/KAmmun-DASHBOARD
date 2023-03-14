import React, { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { Formik, Form } from "formik";
import { getInitialValues, getValidationSchema } from "../Formik";
import { LoadingButton } from "components/input/LoadingButton";
import { history } from "../../../../../history";
import ProgressBar from "components/ProgressBar";
import AuthComponent from "components/AuthComponent";
import { useAddUser } from "api/User";
import ModelForm from "K_Layout/model/ModelForm";
import { useParams } from "react-router-dom";
import { useGetSingleuser } from "api/User";
import useFormTabs from "../useFormTabs";
import Tabs from "components/Tabs";

const EditUserPage = (props) => {
  const t = useTranslation();
  const { isLoading, isError, isSuccess, percentCompleted, mutate } = useAddUser()

  useEffect(() => {
    if (isSuccess) { history.push('/dashboard/user') }
  }, [isSuccess])
  const handelsubmit = (values) => { mutate(values) }
  const { id } = useParams()
  const { data } = useGetSingleuser({ user_id: id })
  console.log(data);

  const tabs = useFormTabs('view', data);

  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {t("edit_user_info")}
        </CardTitle>

        <Button
          color="primary"
          onClick={() => history.push('/dashboard/user')}
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
                    isLoading={isLoading}
                    isError={isError}
                    isSuccess={isSuccess}
                  />
                  <div className="d-flex justify-content-center align-items-center">
                    <LoadingButton
                      type="submit"
                      color="primary"
                      isLoading={isLoading}
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


export default EditUserPage;
