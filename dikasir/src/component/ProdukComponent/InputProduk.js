import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { addIcon, editIcon, hapusIcon } from "../../assets";

const InputProduk = () => {
  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Tambah Produk / Edit Produk</div>
      <div className="underline-title bg-orange"></div>

      <Row>
        <Col md={8} className="my-4">
          <form>
            <div class="mb-3">
              <label for="namaProduk" class="form-label fw-bold fs-5">
                Nama Produk
              </label>
              <input type="text" class="form-control" id="namaProduk" />
            </div>
            <div class="mb-3">
              <label for="harga" class="form-label fw-bold fs-5">
                Harga
              </label>
              <input type="number" class="form-control" id="harga" />
            </div>
            <div class="mb-3">
              <label for="stok" class="form-label fw-bold fs-5">
                Stok
              </label>
              <input type="number" class="form-control" id="stok" />
            </div>
            <labe for="upload" class="form-label fw-bold fs-5 ">
              Upload Gambar
            </labe>
            <div class="input-group mb-3 mt-2">
              <input type="file" class="form-control" id="upload" />
              <label class="input-group-text" for="upload">
                Upload
              </label>
            </div>

            <div className="d-flex gap-2 mt-4">
              <Button>Tambah</Button>
              <Button className="bg-danger border-0" type="reset">
                Reset
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default InputProduk;
