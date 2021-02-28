import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";
export default function Home() {
  return (
    <MainLayout>
      <Row className="justify-content-md-center">
        <Col xs={6} style={{ minHeight: 200, marginTop: 100 }}>
          <Image src="/nextadonis.jpg" layout="fill" objectFit="contain" />
        </Col>
      </Row>
      <Row xs={10} className="justify-content-md-center">
        <Col>
          <h1>
            Welcome to this Fullstack Next.js + Adonis.js starter template
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={4}>
          <Link href="/login">
            <Button
              block
              className="mt-4 gradient"
              size="lg"
              variant="outline-primary"
            >
              Login
            </Button>
          </Link>
        </Col>
        <Col xs={4}>
          <Link href="/signup">
            <Button block type="submit" className="mt-4 gradient" size="lg">
              Signup
            </Button>
          </Link>
        </Col>
      </Row>
    </MainLayout>
  );
}
