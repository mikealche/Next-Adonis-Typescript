import MainLayout from "../layouts/MainLayout";
import SignupForm from "../components/SignupForm";
import { Col, Row } from "react-bootstrap";
export default function Signup() {
  return (
    <MainLayout>
      <Row className="h-50 justify-content-center">
        <Col lg={6} className="my-auto">
          <h1>Signup</h1>
          <SignupForm />
        </Col>
      </Row>
    </MainLayout>
  );
}
