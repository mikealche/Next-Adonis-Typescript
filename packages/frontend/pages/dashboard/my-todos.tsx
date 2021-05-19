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
import type TodoType from "@template/backend/build/app/Models/Todo";

const getTodos = async () => await routes.todo.own.request();

const useTodos = () => {
  const { isAuthenticated } = useAuth();
  const { data, error } = useSWR(isAuthenticated ? "my-todos" : null, getTodos);
  if (error) return { error };
  if (!data) return { isLoading: true };
  return { todos: data.data };
};

const Todo: React.FC<{ todo: TodoType }> = ({ todo }) => {
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
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="my-2 p-3 border rounded"
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

const MyTodos = () => {
  const { todos, isLoading, error } = useTodos();
  console.log({ todos, isLoading, error });
  return (
    <MainLayout>
      <Row>
        <Col md={6}>
          <h2>Create a todo</h2>
          <TodoForm />
        </Col>
        <Col md={6}>
          {isLoading && (
            <ContentLoader uniqueKey="aUniqueKeyToMatchSSR">
              <rect y="10" rx="3" ry="3" width="1000" height="20" />
            </ContentLoader>
          )}
          {todos?.map((todo) => (
            <Todo todo={todo} />
          ))}
        </Col>
      </Row>
    </MainLayout>
  );
};

MyTodos.requiresAuth = true;
MyTodos.redirectUnauthenticated = "/login";

export default MyTodos;
