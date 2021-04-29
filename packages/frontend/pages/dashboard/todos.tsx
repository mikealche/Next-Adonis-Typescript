import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import MainLayout from "../../layouts/MainLayout";
import ContentLoader from "react-content-loader";
import { Col, Row } from "react-bootstrap";
import { routes } from "@template/shared";
import useSWR from "swr";

const getTodos = async () => await routes.todo.all.request();

const useTodos = () => {
  const { data, error } = useSWR("todos", getTodos);
  if (error) return { error };
  if (!data) return { isLoading: true };
  console.log(data.data);
  return { todos: data.data };
};

const Todo = ({ todo }) => {
  return <p key={todo.id}>{todo.text}</p>;
};

const Dashboard = () => {
  const { user } = useAuth();
  const { todos } = useTodos();
  return (
    <MainLayout>
      <Row>
        <Col>
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
