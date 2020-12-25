import React from "react";
import { Container } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <SiteNavbar />
      {children}
    </div>
  );
}
