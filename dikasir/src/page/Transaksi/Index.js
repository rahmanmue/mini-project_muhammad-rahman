import React, { useEffect, useState } from "react";
import {
  NavbarComponent,
  SidebarComponent,
  TabelTransaksiComponent,
} from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import { useSubscribeDataTransaksi } from "../../hooks";

const Index = () => {
  const { data, loading } = useSubscribeDataTransaksi();

  const [transaksi, setTransaksi] = useState();

  useEffect(() => {
    if (data) {
      setTransaksi(data.test_Transaksi);
    }
  }, [data]);

  console.log(transaksi);

  return (
    <>
      <NavbarComponent home={false} />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <TabelTransaksiComponent data={transaksi} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
