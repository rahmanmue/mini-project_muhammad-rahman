import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addListItem } from "../../store/ListItemSlice";
import { addIcon } from "../../assets";
import { toRupiah } from "../../utils/toRupiah";
import { useSelector } from "react-redux";

const Index = ({ data }) => {
  const { nama, stok, harga, gambar, id } = data;
  const dispatch = useDispatch();
  const listPayment = useSelector((state) => state.List.listPayment);
  const uuid = useSelector((state) => state.List.uuid);
  const [qty, setQty] = useState(1);
  const [newData, setnewData] = useState({});

  const addData = (qty, kodeNota) => {
    if (qty > stok || qty === "") {
      setQty(1);
    } else {
      setnewData({
        id: id,
        nama: nama,
        harga: harga,
        stok: stok,
        quantity: qty,
        kodeNota: kodeNota,
      });
    }
  };

  useEffect(() => {
    addData(qty, uuid);
  }, [listPayment]);

  // console.log("list Bayar : ", listPayment);

  return (
    <Col md={4} className="mt-5 px-3">
      <Card className="rounded-5 ">
        <Card.Img variant="top" src={gambar} />
        <Card.Body>
          <div className="text-capitalize fw-bold">{nama}</div>
          <div className="my-2"> Stok : {stok}</div>
          <div className="text-capitalize my-2 fw-bolder">
            {toRupiah(harga)}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="number"
              className="form-control"
              max={stok}
              min="1"
              onChange={(e) => setQty(Number(e.target.value))}
              placeholder={`Max : ${stok}`}
              style={{ width: "70%" }}
            />
            <button
              type="button"
              className="btn bg-warning-2 "
              onClick={() => dispatch(addListItem(newData))}
              // onClick={addData}
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
