import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import MainLayout from "../../layouts/MainLayout";
import ContentLoader from "react-content-loader";
import { Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <MainLayout>
      <Row>
        <Col>
          {user ? (
            <p>Welcome {user.email}</p>
          ) : (
            <ContentLoader uniqueKey="aUniqueKeyToMatchSSR">
              <rect y="10" rx="3" ry="3" width="1000" height="20" />
            </ContentLoader>
          )}
        </Col>
      </Row>
    </MainLayout>
  );
};

Dashboard.requiresAuth = true;
Dashboard.redirectUnauthenticated = "/login";

export default Dashboard;
