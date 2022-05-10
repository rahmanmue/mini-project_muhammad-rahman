import React from "react";
import {
  NavbarComponent,
  SidebarComponent,
  DashboardComponent,
} from "../../component";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <NavbarComponent home={false} />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <DashboardComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
