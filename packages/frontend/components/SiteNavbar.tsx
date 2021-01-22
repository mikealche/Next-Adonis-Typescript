import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useAuth } from "../contexts/auth";
import ClientOnly from "./ClientOnly";
import Link from "next/link";

export default function SiteNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Fullstack Template</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ClientOnly>
            <AuthDetails />
          </ClientOnly>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function AuthDetails() {
  const { user, logout, isLoading } = useAuth();
  if (isLoading) return null;
  if (!user)
    return (
      <div>
        <Nav>
          <Link href="/" passHref>
            <Nav.Link>Signup</Nav.Link>
          </Link>

          <Link href="login" passHref>
            <Nav.Link href="login">Login</Nav.Link>
          </Link>
        </Nav>
      </div>
    );
  return (
    <Nav>
      <Nav.Link>{user.email}</Nav.Link>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  );
}
