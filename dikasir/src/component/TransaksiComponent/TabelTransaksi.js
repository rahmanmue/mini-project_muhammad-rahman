import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { infoIcon } from "../../assets";
import { toRupiah } from "../../utils";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { filterDate } from "../../utils";

const TabelTransaksi = ({ data }) => {
  const [tanggal, setTanggal] = useState("");

  // state filter untuk data produk
  const [dataFilter, setFilter] = useState([]);

  // handle perubahan set search input
  const handleChange = (e) => {
    setTanggal(e.target.value);
  };

  // component didupdate ketika ada data dan searchinput
  useEffect(() => {
    setFilter(
      filterDate({
        Transaksi: data || [],
        Tanggal: tanggal,
      })
    );
  }, [data, tanggal]);

  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Transaksi</div>
      <div className="underline-title bg-orange"></div>

      <Row>
        <Col md={5} className="my-4">
          <label className="form-label">Cari Berdasarkan Tanggal</label>
          <div class="input-group">
            <input
              type="date"
              className="form-control"
              onChange={handleChange}
            />
            <Button
              className="input-group-text btn-danger"
              onClick={() => setTanggal("")}
            >
              Reset
            </Button>
          </div>
        </Col>
        <Col md={12}>
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
                {dataFilter.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.tanggal}</td>
                    <td>{toRupiah(item.total)}</td>
                    <td>{toRupiah(item.bayar)}</td>
                    <td>{toRupiah(item.kembali)}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      <Link to={`/transaksi/rincian/${item.kodeNota}`}>
                        <Button className="d-flex gap-2 bg-transparent border-0 ">
                          <img src={infoIcon} alt="edit" width={33} />
                        </Button>
                      </Link>
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

export default TabelTransaksi;
