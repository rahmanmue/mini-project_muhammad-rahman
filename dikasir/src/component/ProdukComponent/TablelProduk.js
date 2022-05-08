import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { addIcon, editIcon, hapusIcon } from "../../assets";

const TablelProduk = () => {
  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Produk</div>
      <div className="underline-title bg-orange"></div>

      <Row>
        <Col md={12} className="my-3">
          <div className="d-flex justify-content-end">
            <Button className="d-flex gap-2 ">
              <img src={addIcon} alt="plus" />
              <div>Produk</div>
            </Button>
          </div>
        </Col>
        <Col md={12}>
          <div className="table-responsive">
            <table class="table table-bordered text-center">
              <thead class="table-dark ">
                <tr>
                  <td>No</td>
                  <td>Nama Produk</td>
                  <td>Harga</td>
                  <td>Stok</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Minyak Goreng</td>
                  <td>Rp. 25.000</td>
                  <td>12</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <Button className="d-flex gap-2 bg-warning border-0 ">
                        <img src={editIcon} alt="edit" />
                      </Button>
                      <Button className="d-flex gap-2 bg-danger border-0 ">
                        <img src={hapusIcon} alt="hapus" />
                      </Button>
                    </div>
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

export default TablelProduk;
