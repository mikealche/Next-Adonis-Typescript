import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import MainLayout from "../../layouts/MainLayout";
import ContentLoader from "react-content-loader";
import { Button, Col, Row } from "react-bootstrap";
import { routes } from "@template/shared";
import useSWR, { mutate } from "swr";
import { Form, Formik } from "formik";
import { CustomField } from "../../components/EmailPasswordForm";

const getTodos = async () => await routes.todo.own.request();

const useTodos = () => {
  const { data, error } = useSWR("my-todos", getTodos);
  if (error) return { error };
  if (!data) return { isLoading: true };
  return { todos: data.data };
};

const Todo = ({ todo }) => {
  const deleteTodo = async () => {
    await routes.todo.delete.request({
      id: todo.id,
    });
    mutate("my-todos");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      {todo.text}
      <Button variant="outline-danger" onClick={deleteTodo}>
        🗑
      </Button>
    </div>
  );
};

const TodoForm = () => {
  return (
    <Formik
      initialValues={{ text: "" }}
      onSubmit={async ({ text }, { setSubmitting, setErrors, resetForm }) => {
        try {
          await routes.todo.create.request({
            text,
          });
          mutate("my-todos");
          resetForm();
        } catch (error) {
          const formikErrors = error.response.data.errors.reduce(
            (acc, error) => ({ ...acc, [error.field]: error.message }),
            {}
          );
          setErrors(formikErrors);
        }
      }}
    >
      {(formik) => (
        <Form>
          <CustomField name="text" type="text" label="Text" />
          <Button
            block
            type="submit"
            className="mt-4 gradient"
            size="lg"
            disabled={formik.isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const { todos } = useTodos();
  return (
    <MainLayout>
      <Row>
        <Col md={6}>
          <h2>Create a todo</h2>
          <TodoForm />
        </Col>
        <Col md={6}>
          {todos?.map((todo) => (
            <Todo todo={todo} />
          ))}
        </Col>
      </Row>
    </MainLayout>
  );
};

Dashboard.requiresAuth = true;
Dashboard.redirectUnauthenticated = "/login";

export default Dashboard;
