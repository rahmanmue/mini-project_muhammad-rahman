import React from "react";
import { NavbarComponent, SidebarComponent } from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import { TabelProdukComponent, InputProdukComponent } from "../../component";

const Index = () => {
  return (
    <>
      <NavbarComponent home={false} />
      <Container>
        <Row>
          <Col md={3}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            {/* <TabelProdukComponent /> */}
            <InputProdukComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
