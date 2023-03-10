import React from "react";
import { CardBody } from "reactstrap";
import { Mail, Lock } from "react-feather";
import { useAuth } from "redux/hooks/auth";
import { Formik, Form } from "formik";
import { ValidatedField } from "components/input/ValidatedField";
import * as Yup from "yup";
import { Redirect } from "react-router";
import { LoadingButton } from "components/input/LoadingButton";
import { useTranslation } from "utility/language";
import { PasswordField } from "components/input";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("required"),
  password: Yup.string().required("_required.password"),
});

const LoginForm = (props) => {
  const { login, isAuthenticated, isLoading } = useAuth();
  const t = useTranslation();

  const handleLogin = (values) => {
    login(values);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <CardBody className="pt-0" style={{ flexGrow: 0 }}>
        <Formik
          onSubmit={handleLogin}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <ValidatedField
                name="username"
                type="username"
                label={t("username")}
                placeholder={t("username")}
                formProps={{
                  style: { marginBottom: "2px" },
                }}
                icon={Mail}
              />
              <PasswordField
                name="password"
                label={t("password")}
                placeholder={t("password")}
                icon={Lock}
              />
              <div className="d-flex justify-content-center align-items-center mt-2">
                <LoadingButton
                  isLoading={isLoading}
                  color="primary"
                  type="submit"
                >
                  {t("login")}
                </LoadingButton>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </React.Fragment>
  );
};

export default LoginForm;
