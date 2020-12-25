import MainLayout from "../layouts/MainLayout";
import LoginForm from "../components/LoginForm";
import { Col, Row } from "react-bootstrap";
export default function Home() {
  return (
    <MainLayout>
      <Row className="h-50 justify-content-center">
        <Col lg={6} className="my-auto">
          <h1>Login</h1>
          <LoginForm />
        </Col>
      </Row>
    </MainLayout>
  );
}
