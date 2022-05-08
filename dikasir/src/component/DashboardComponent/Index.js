import React from "react";
import { stokIcon, produkIcon, transaksiIcon } from "../../assets";
import { Row, Col } from "react-bootstrap";

const Index = () => {
  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Dashboard</div>
      <div className="underline-title bg-orange"></div>

      <Row className="mt-3">
        <Col md={4} className="mt-3">
          <div className="box bg-warning-2 d-flex flex-column">
            <div className="sub-title ms-auto">Jumlah Produk</div>
            <div className="underline bg-white ms-auto w-50 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <img src={produkIcon} alt="produk" width={92} />
              <div className="total">18</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3">
          <div className="box bg-warning-2 d-flex flex-column">
            <div className="sub-title ms-auto">Stok Keseluruhan</div>
            <div className="underline bg-white ms-auto w-50 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <img src={stokIcon} alt="stok" width={92} />
              <div className="total">149</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3">
          <div className="box bg-warning-2 d-flex flex-column">
            <div className="sub-title ms-auto">Jumlah Transaksi</div>
            <div className="underline bg-white ms-auto w-50 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <img src={transaksiIcon} alt="transaksi" width={92} />
              <div className="total">18</div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mt-3">
          <div className="box bg-danger-3 d-flex flex-column">
            <div className="sub-title ms-auto text-white">Jumlah Transaksi</div>
            <div className="underline bg-white ms-auto w-25 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <div className="rupiah text-white">Rp. 18.000000</div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mt-3">
          <div className="box bg-success-2 d-flex flex-column">
            <div className="sub-title ms-auto text-white">Jumlah Transaksi</div>
            <div className="underline bg-white ms-auto w-25 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <div className="rupiah text-white">Rp. 18.0000000</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
