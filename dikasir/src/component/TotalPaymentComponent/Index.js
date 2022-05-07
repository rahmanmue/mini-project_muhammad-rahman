import { useEffect, useState } from "react";
import { Button, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newPayment } from "../../store/ListItemSlice";
import { toRupiah } from "../../utils/toRupiah";

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
    let kodeNota = "";
    await (listItem.length > 0 ? (kodeNota = listItem[0].kodeNota) : "");
    const newData = {
      total: totalBayar,
      bayar: bayar,
      kembali: kembali,
      kodeNota: kodeNota,
    };
    dispatch(newPayment(newData));
  };

  const lp = useSelector((state) => state.List.listPayment);

  const handleClick = async (e) => {
    if (kembali < 0) {
      return alert("Pembayaran Kurang !!!");
    } else {
      await addNewDataPayment();
      console.log("ListItem : ", listItem);
      console.log("transaksi : ", lp);
    }
  };

  // useEffect(() => {
  //   transaksi = lp;
  // }, [lp]);

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

          <Button className="bg-primary-2 my-2 border-0" onClick={handleClick}>
            KONFIRMASI PEMBAYARAN
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Index;
