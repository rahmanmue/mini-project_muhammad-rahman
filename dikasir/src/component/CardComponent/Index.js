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

  const [newData, setnewData] = useState();

  const addData = (kodeNota) => {
    const newList = {
      nama: nama,
      harga: harga,
      // stok: stok,
      quantity: 1,
      kodeNota: kodeNota,
      id_product: id,
    };
    setnewData(newList);
  };

  // console.log(newData);

  useEffect(() => {
    addData(uuid);
  }, [listPayment]);

  // const handleClickAddListItem = () => {};

  return (
    <Col md={4} className="mt-5 px-3">
      <Card className="rounded-5 ">
        <Card.Img variant="top" src={gambar} />
        <Card.Body>
          <div className="text-capitalize fw-bold">{nama}</div>
          <div className="my-2"> Stok : {stok}</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-capitalize my-2 fw-bolder">
              {toRupiah(harga)}
            </div>

            <button
              type="button"
              className="btn bg-warning-2 "
              onClick={() =>
                dispatch(
                  addListItem({
                    nama: nama,
                    harga: harga,
                    // stok: stok,
                    quantity: 1,
                    kodeNota: uuid,
                    id: id,
                  })
                )
              }
              // onClick={handleClickAddListItem}
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
