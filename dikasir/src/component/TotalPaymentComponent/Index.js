import { useState } from "react";
import { Button, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllListItem, newPayment } from "../../store/ListItemSlice";
import { toRupiah, getDate } from "../../utils/index";
import {
  useInsertDataNota,
  useUpsertDataProduct,
  useInsertDataTransaksi,
} from "../../hooks/index";

const Index = () => {
  // graphql hooks
  const { insertNota, loadingInsertNota } = useInsertDataNota();
  const { insertTransaksi, loadingInsertTransaksi } = useInsertDataTransaksi();
  const { upsertProduk, loadingUpsertProduk } = useUpsertDataProduct();

  // store redux
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);
  const listPayment = useSelector((state) => state.List.listPayment);

  // bayar
  const [bayar, setBayar] = useState("");

  // total bayar
  let totalBayar = 0;
  totalBayar = listItem.reduce((total, aliasListItem) => {
    return total + aliasListItem.harga * aliasListItem.quantity;
  }, 0);

  // kembali
  let kembali = 0;
  kembali = bayar - totalBayar;

  // tambah data pembayaran
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

  // set button disable
  const [btnDisable, setBtnDisable] = useState(false);

  // konfirmasi produk
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

  // reset data
  const resetData = () => {
    setBtnDisable(true);
    dispatch(deleteAllListItem());
    setBtnDisable(false);
    setBayar("");
  };

  // konfirmasi pembayaran
  const handleClickConfirmPayment = () => {
    insertNota({
      variables: {
        objects: listItem,
      },
    });

    console.log(listPayment);
    insertTransaksi({
      variables: {
        object: listPayment[0],
      },
    });

    const upsertData = listItem.map((item) => {
      return {
        id: item.id_produk,
        namaProduk: item.namaProduk,
        harga: item.harga,
        stok: item.stok - item.quantity,
        gambar: " ",
      };
    });

    upsertProduk({
      variables: {
        objects: upsertData,
      },
    });

    resetData();
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
              value={bayar || ""}
              className="form-control "
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
            className={` mt-2 border-0 bg-warning ${
              !btnDisable ? `fw-bolder  text-dark` : `fw-light`
            }`}
            onClick={handleClickConfirmProduct}
            disabled={btnDisable}
          >
            KONFIRMASI PRODUK
          </Button>
          <Button
            className={`my-1  ${
              !btnDisable ? `btn btn-outline-primary ` : `bg-primary`
            }`}
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
