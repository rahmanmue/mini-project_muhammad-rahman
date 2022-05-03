import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addListItem } from "../../store/ListItemSlice";
import { addIcon } from "../../assets";

const Index = ({ item }) => {
  const { nama, stok, harga, gambar, id } = item;
  const newData = (value) => {
    return { id: id, nama: nama, harga: harga, stok: stok, quantity: value };
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value > stok || e.target.value === "") {
      setData(newData(1));
    } else {
      setData(newData(Number(e.target.value)));
    }
  };

  const [data, setData] = useState(newData(1));

  const dispatch = useDispatch();
  return (
    <Col md={4} className="mt-5 px-3">
      <Card className="rounded-5 ">
        <Card.Img variant="top" src={gambar} />
        <Card.Body>
          <div className="text-capitalize fw-bold">{nama}</div>
          <div className="my-2"> Stok : {stok}</div>
          <div className="text-capitalize my-2 fw-bolder"> Rp. {harga}</div>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="number"
              className="form-control"
              max={stok}
              min="1"
              onChange={handleChange}
              placeholder={`Max : ${stok}`}
              style={{ width: "70%" }}
            />
            <button
              type="button"
              className="btn bg-warning-2 "
              onClick={() => dispatch(addListItem(data))}
            >
              <img src={addIcon} alt="tambah" width={15} />
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Index;
