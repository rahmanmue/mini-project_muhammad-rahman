import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { infoIcon } from "../../assets";

const TabelTransaksi = () => {
  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Transaksi</div>
      <div className="underline-title bg-orange"></div>

      <Row>
        <Col md={12} className="mt-5">
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-dark ">
                <tr>
                  <td>No</td>
                  <td>Tanggal</td>
                  <td>Total</td>
                  <td>Bayar</td>
                  <td>Kembali</td>
                  <td>Rincian</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2022-4-5</td>
                  <td>Rp. 25.000</td>
                  <td>Rp. 30.0000</td>
                  <td>Rp. 5.000</td>
                  <td className="d-flex gap-2 justify-content-center">
                    {/* <Button className="d-flex gap-2 bg-transparent border-0 "> */}
                    <img src={infoIcon} alt="edit" width={33} />
                    {/* </Button> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TabelTransaksi;
