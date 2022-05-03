import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

const Index = () => {
  return (
    <>
      <Col md={{ span: 4, offset: 8 }} className="fixed-bottom">
        <Card className="px-4 py-2">
          <div className="d-flex justify-content-between mt-2">
            <strong>Total (Rp)</strong>
            <strong>120.000</strong>
          </div>
          <div className="d-flex justify-content-between align-items-center  mt-2">
            <strong>Bayar (Rp)</strong>
            <input
              type="text"
              className="form-control"
              style={{ width: "50%", height: "30px" }}
              placeholder=""
            />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Kembali (Rp)</strong>
            <strong>22.000</strong>
          </div>

          <Button className="bg-primary-2 my-2 border-0" disabled>
            KONFIRMASI PEMBAYARAN
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Index;
