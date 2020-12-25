import { ErrorMessage, Field, Form } from "formik";
import React from "react";
import { Button, Form as BootstrapForm } from "react-bootstrap";

const CustomField = ({ name, label, type }) => (
  <BootstrapForm.Group>
    <BootstrapForm.Label htmlFor={name}>{label}</BootstrapForm.Label>
    <Field
      name={name}
      type={type}
      className="form-control"
      as={BootstrapForm.Control}
    />
    <BootstrapForm.Text className="text-muted">
      <ErrorMessage name={name} className="text-danger" component="p" />
    </BootstrapForm.Text>
  </BootstrapForm.Group>
);

export default function EmailPasswordForm({ formik }) {
  return (
    <Form>
      <CustomField name="email" type={"email"} label="Email Address" />
      <CustomField name="password" type={"password"} label="Email Address" />

      <Button
        block
        type="submit"
        variant="success"
        className="mt-4"
        disabled={formik.isSubmitting}
      >
        Submit
      </Button>
    </Form>
  );
}
