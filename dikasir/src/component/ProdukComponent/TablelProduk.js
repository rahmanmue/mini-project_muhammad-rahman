import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { addIcon, editIcon, hapusIcon } from "../../assets";
import { toRupiah } from "../../utils";
import { Link } from "react-router-dom";
import { useDeleteDataProduct } from "../../hooks";

const TablelProduk = ({ data }) => {
  const { deleteProduk } = useDeleteDataProduct();

  const hapusProduk = (id) => {
    deleteProduk({
      variables: {
        _eq: id,
      },
    });
  };

  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Produk</div>
      <div className="underline-title bg-orange"></div>
      <Row>
        <Col md={12} className="my-3">
          <div className="d-flex justify-content-end">
            <Link to="/produk/tambah">
              <Button className="d-flex gap-2 ">
                <img src={addIcon} alt="plus" />
                <div>Produk</div>
              </Button>
            </Link>
          </div>
        </Col>
        <Col md={12}>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-dark ">
                <tr>
                  <td>No</td>
                  <td>Nama Produk</td>
                  <td>Harga</td>
                  <td>Stok</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.namaProduk}</td>
                    <td>{toRupiah(item.harga)}</td>
                    <td>{item.stok}</td>
                    <td>
                      <div className="d-flex gap-2 justify-content-center">
                        <Button className="d-flex gap-2 bg-warning border-0 ">
                          <img src={editIcon} alt="edit" />
                        </Button>
                        <Button
                          className="d-flex gap-2 bg-danger border-0 "
                          onClick={() => hapusProduk(item.id)}
                        >
                          <img src={hapusIcon} alt="hapus" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TablelProduk;
