import React from "react";
import { Container } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";

export default function MainLayout({ children }) {
  return (
    <>
      <SiteNavbar />
      <div className="container h-100 pt-5">{children}</div>
    </>
  );
}
