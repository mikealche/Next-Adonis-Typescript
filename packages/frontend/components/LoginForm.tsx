import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { routes } from "@template/shared";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import { Button, Form as BootstrapForm } from "react-bootstrap";
import EmailPasswordForm from "./EmailPasswordForm";

const LoginForm = () => {
  const { authenticate } = useAuth();
  const router = useRouter();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string(),
      })}
      onSubmit={async ({ email, password }, { setSubmitting, setErrors }) => {
        try {
          const { data: token } = await routes.user.login.request({
            email,
            password,
          });
          await authenticate(token.token);
          setSubmitting(false);
          router.push("/dashboard");
        } catch (error) {
          const formikErrors = error.response.data.errors.reduce(
            (acc, error) => ({ ...acc, [error.field]: error.message }),
            {}
          );
          setErrors(formikErrors);
          setSubmitting(false);
        }
      }}
    >
      {(formik) => <EmailPasswordForm formik={formik} />}
    </Formik>
  );
};

export default LoginForm;
