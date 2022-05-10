import React from "react";
import {
  NavbarComponent,
  SidebarComponent,
  TabelTransaksiComponent,
} from "../../component";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  return (
    <>
      <NavbarComponent home={false} />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <TabelTransaksiComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
