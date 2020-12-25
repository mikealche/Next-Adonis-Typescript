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
      <CustomField name="email" type="email" label="Email Address" />
      <CustomField name="password" type="password" label="Password" />

      <Button
        block
        type="submit"
        className="mt-4 gradient"
        size="lg"
        disabled={formik.isSubmitting}
        style={{
          background: "linear-gradient(to right, #5FC3E4, #E55D87)",
          border: "0px solid black",
        }}
      >
        Submit
      </Button>
    </Form>
  );
}
