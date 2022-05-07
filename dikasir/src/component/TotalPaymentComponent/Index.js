import { useEffect, useState } from "react";
import { Button, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllListItem, newPayment } from "../../store/ListItemSlice";
import { toRupiah } from "../../utils/toRupiah";
import { getDate } from "../../utils/getDate";
import { gql, useMutation } from "@apollo/client";

const addData = gql`
  mutation MyMutation($objects: [test_Nota_insert_input!] = {}) {
    insert_test_Nota(objects: $objects) {
      affected_rows
      returning {
        id
        id_product
        kodeNota
        nama
        quantity
        harga
      }
    }
  }
`;

const insertTransaksi = gql`
  mutation MyMutation($object: test_Transaksi_insert_input = {}) {
    insert_test_Transaksi_one(object: $object) {
      id
      total
      bayar
      kembali
      kodeNota
      tanggal
    }
  }
`;

const Index = () => {
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);
  const [bayar, setBayar] = useState(0);
  let totalBayar = 0;
  totalBayar = listItem.reduce((total, aliasListItem) => {
    return total + aliasListItem.harga * aliasListItem.quantity;
  }, 0);
  let kembali = 0;
  kembali = bayar - totalBayar;

  const addNewDataPayment = async () => {
    let kodeNota;
    await (listItem.length > 0 ? (kodeNota = listItem[0].kodeNota) : "");
    const newData = {
      total: totalBayar,
      bayar: bayar,
      kembali: kembali,
      kodeNota: kodeNota,
      tanggal: getDate(),
    };
    dispatch(newPayment(newData));
  };

  const lp = useSelector((state) => state.List.listPayment);
  const [btnDisable, setBtnDisable] = useState(false);
  const handleClickConfirmProduct = async () => {
    if (kembali < 0) {
      return alert("Pembayaran Kurang !!!");
    } else if (totalBayar === 0) {
      return alert("Silahkan Pilih Barang Terlebih Dahulu");
    } else {
      await addNewDataPayment();
      setBtnDisable(true);
    }
  };

  const [insertDataProduct, { loading: loadingInsert }] = useMutation(addData);
  const [addTransaksi, { loading: loadingAdd }] = useMutation(insertTransaksi);
  const handleClickConfirmPayment = () => {
    console.log(listItem);
    insertDataProduct({
      variables: {
        objects: listItem,
      },
    });
    console.log(lp);
    addTransaksi({
      variables: {
        object: lp[0],
      },
    });
    setBtnDisable(true);
    dispatch(deleteAllListItem());
    setBtnDisable(false);
  };

  return (
    <>
      <Col md={{ span: 4, offset: 8 }} className="fixed-bottom">
        <Card className="px-4 py-2">
          <div className="d-flex justify-content-between align-items-center  mt-2">
            <strong>Bayar </strong>
            <input
              type="number"
              max={totalBayar}
              onChange={(e) => setBayar(Number(e.target.value))}
              className="form-control "
              // dir="rtl"
              style={{ width: "28%", height: "30px" }}
              placeholder=""
            />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Total </strong>
            <strong className="">{toRupiah(totalBayar)}</strong>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Kembali </strong>
            <strong className={kembali < 0 ? `text-danger ` : `text-primary `}>
              {toRupiah(kembali)}
            </strong>
          </div>

          <Button
            className="bg-warning text-dark fw-bolder mt-2 border-0"
            onClick={handleClickConfirmProduct}
            disabled={btnDisable}
          >
            KONFIRMASI PRODUK
          </Button>
          <Button
            className="bg-primary my-1 border-0 "
            onClick={handleClickConfirmPayment}
            disabled={!btnDisable}
          >
            KONFIRMASI PEMBAYARAN
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Index;
