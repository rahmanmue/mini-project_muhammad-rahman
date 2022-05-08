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

// const addData = gql`
//   mutation MyMutation($objects: [test_Nota_insert_input!] = {}) {
//     insert_test_Nota(objects: $objects) {
//       affected_rows
//       returning {
//         id
//         id_produk
//         kodeNota
//         namaProduk
//         quantity
//         harga
//       }
//     }
//   }
// `;

// const insertTransaksi = gql`
//   mutation MyMutation($object: test_Transaksi_insert_input = {}) {
//     insert_test_Transaksi_one(object: $object) {
//       id
//       total
//       bayar
//       kembali
//       kodeNota
//       tanggal
//     }
//   }
// `;

// const upsertDataProduk = gql`
//   mutation MyMutation(
//     $objects: [test_Produk_insert_input!] = {}
//     $constraint: test_Produk_constraint = Product_pkey
//   ) {
//     insert_test_Produk(
//       objects: $objects
//       on_conflict: { constraint: $constraint, update_columns: stok }
//     ) {
//       affected_rows
//     }
//   }
// `;

const Index = () => {
  // graphql
  // const [insertDataProduct, { loading: loadingInsert }] = useMutation(addData);
  // const [addTransaksi, { loading: loadingAdd }] = useMutation(insertTransaksi);
  // const [upsertProduk, { loading: loadingUpsert }] =
  //   useMutation(upsertDataProduk);

  // graphql hooks
  const { insertNota, loadingInsertNota } = useInsertDataNota();
  const { insertTransaksi, loadingInsertTransaksi } = useInsertDataTransaksi();
  const { upsertProduk, loadingUpsertProduk } = useUpsertDataProduct();

  // store redux
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);
  const listPayment = useSelector((state) => state.List.listPayment);

  // bayar
  const [bayar, setBayar] = useState(0);

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
    setBayar(0);
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
