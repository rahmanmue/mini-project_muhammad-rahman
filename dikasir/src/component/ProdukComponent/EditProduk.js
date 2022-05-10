import React from "react";
import { useState, useEffect } from "react";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { storage } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import { useGetDataProductById } from "../../hooks";
import { useUpdateDataProduct } from "../../hooks";
import { useNavigate } from "react-router-dom";

const EditProduk = () => {
  // ambil id dan navigasi halaman
  let { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  // gql getpprodukbyid dan updateproduk
  const { data } = useGetDataProductById(id);
  const { updateProduk, loadingUpdateProduk } = useUpdateDataProduct();

  const [state, setState] = useState();

  // set data ke state
  useEffect(() => {
    if (data) {
      setState(data?.test_Produk_by_pk || {});
    }
  }, [data]);

  // handle perubahan setiap form input
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // state input file
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  // set file yang diuolaoad
  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  // handel info
  const [info, setInfo] = useState("Upload Gambar");

  // handle Upload
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

  // handel Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newData;
    if (url === "") {
      newData = {
        namaProduk: state.namaProduk,
        harga: state.harga,
        stok: state.stok,
        gambar: state.gambar,
      };
    } else {
      newData = {
        namaProduk: state.namaProduk,
        harga: state.harga,
        stok: state.stok,
        gambar: url,
      };
    }
    console.log(newData);
    updateProduk({
      variables: {
        id: state.id,
        _set: newData,
      },
    });

    setShow(true);
  };

  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Edit Produk</div>
      <div className="underline-title bg-orange"></div>

      <Row>
        <Col md={10} className="my-4">
          {show ? (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              Data Berhasil diedit{" "}
              <span
                className="alert-link text-decoration-underline"
                type="button"
                onClick={() => navigate(-1)}
              >
                {" "}
                Kembali Ke halaman Produk.
              </span>
            </Alert>
          ) : (
            ""
          )}
          <div className="mb-3">
            <input type="hidden" value={state?.id} />
            <input type="hidden" value={state?.gambar} />
            <label htmlFor="namaProduk" className="form-label fw-bold fs-5">
              Nama Produk
            </label>
            <input
              type="text"
              className="form-control"
              id="namaProduk"
              name="namaProduk"
              value={state?.namaProduk}
              onChange={handleChange}
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
              value={state?.harga}
              onChange={handleChange}
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
              value={state?.stok}
              onChange={handleChange}
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
            <span className="mt-1 text-warning">
              Biarkan Jika tidak ingin diubah
            </span>
          </form>

          <div className="d-flex gap-2 mt-4">
            <Button onClick={handleSubmit}>Edit</Button>
            <Button className="bg-danger border-0" onClick={() => navigate(-1)}>
              Kembali
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EditProduk;
