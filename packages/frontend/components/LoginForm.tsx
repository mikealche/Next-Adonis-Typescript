import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { routes } from "@template/shared";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

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
          const { data: token } = await routes.login.request({
            email,
            password,
          });
          console.log({ token });
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
      {(formik) => <ActualForm formik={formik} />}
    </Formik>
  );
};

const ActualForm = ({ formik }) => (
  <Form>
    <div>
      <label htmlFor="email">Email Address</label>
      <Field name="email" type="email" className="form-control" />
      <ErrorMessage name="email" className="text-danger" component="p" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" type="password" className="form-control" />
      <ErrorMessage name="password" className="text-danger" component="p" />
    </div>
    <Button
      block
      type="submit"
      variant="success"
      disabled={formik.isSubmitting}
    >
      Submit
    </Button>
  </Form>
);

export default LoginForm;
