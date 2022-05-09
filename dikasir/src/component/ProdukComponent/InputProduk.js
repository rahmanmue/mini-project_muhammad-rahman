import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { storage } from "../../firebase/firebase";
import { useInsertDataProduct } from "../../hooks";

const InputProduk = () => {
  // gql hook insert data produk
  const { insertProduk, loadingInsertProduk } = useInsertDataProduct();

  // state input
  const [namaProduk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState();
  const [stok, setStok] = useState();

  // state input file
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  // set file yang diuolaoad
  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const [info, setInfo] = useState("Upload Gambar");

  const handleUpload = async (e) => {
    e.preventDefault();
    const path = `/images/${file.name}`;
    const ref = storage.ref(path);
    setInfo("Tunggu...");
    await ref.put(file);
    const url = await ref.getDownloadURL();
    setURL(url);
    setFile(null);
    setInfo("Selesai...");
  };

  // console.log(url);

  const reset = () => {
    setHarga("");
    setNamaProduk("");
    setStok("");
    setInfo("Upload Gambar");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      namaProduk: namaProduk,
      harga: harga,
      stok: stok,
      gambar: url,
    };

    insertProduk({
      variables: {
        object: data,
      },
    });
    console.log(data);
    reset();
  };

  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Tambah Produk / Edit Produk</div>
      <div className="underline-title bg-orange"></div>

      <Row>
        <Col md={8} className="my-4">
          <div className="mb-3">
            <label htmlFor="namaProduk" className="form-label fw-bold fs-5">
              Nama Produk
            </label>
            <input
              type="text"
              className="form-control"
              id="namaProduk"
              name="namaProduk"
              value={namaProduk || " "}
              onChange={(e) => {
                setNamaProduk(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="harga" className="form-label fw-bold fs-5">
              Harga
            </label>
            <input
              type="number"
              className="form-control"
              id="harga"
              name="harga"
              value={harga || ""}
              onChange={(e) => {
                setHarga(Number(e.target.value));
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stok" className="form-label fw-bold fs-5">
              Stok
            </label>
            <input
              type="number"
              className="form-control"
              id="stok"
              name="stok"
              value={stok || ""}
              onChange={(e) => {
                setStok(Number(e.target.value));
              }}
            />
          </div>
          <label htmlFor="upload" className="form-label fw-bold fs-5 ">
            Upload Gambar
          </label>

          <form onSubmit={handleUpload}>
            <div className="input-group">
              <input
                type="file"
                className="form-control"
                onChange={handleFileUpload}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tombol Upload tidak akan berfungsi jika belum dipilih gambar"
                accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
              />
              <button className="input-group-text" disabled={!file}>
                {info}
              </button>
            </div>
          </form>

          <div className="d-flex gap-2 mt-4">
            <Button onClick={handleSubmit}>Tambah</Button>
            <Button className="bg-danger border-0" onClick={reset}>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InputProduk;
