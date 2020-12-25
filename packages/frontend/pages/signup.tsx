import Head from "next/head";
import styles from "../styles/Home.module.css";
import { routes, authenticateAPI } from "@template/shared";
import Cookies from "js-cookie";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import MainLayout from "../layouts/MainLayout";
import SignupForm from "../components/SignupForm";
import { Col, Row } from "react-bootstrap";
export default function Home() {
  return (
    <MainLayout>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          <h1>Signup</h1>
          <SignupForm />
        </Col>
      </Row>
    </MainLayout>
  );
}
