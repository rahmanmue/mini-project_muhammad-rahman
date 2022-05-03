import { useState } from "react";
import { Button, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newPayment } from "../../store/ListItemSlice";
import { rupiah } from "../../util";

const Index = () => {
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);
  const listPembayaran = useSelector((state) => state.List.listPayment);

  const [bayar, setBayar] = useState(0);
  let totalBayar = 0;
  let kembali = 0;

  const handleChangeBayar = (e) => {
    setBayar(Number(e.target.value));
  };

  totalBayar = listItem.reduce((total, aliasListItem) => {
    return total + aliasListItem.harga * aliasListItem.quantity;
  }, 0);

  kembali = bayar - totalBayar;

  const onSubmit = (e) => {
    e.preventDefault();

    if (kembali < 0) {
      return alert("Pembayaran Kurang !!!");
    } else {
      const newData = {
        total: totalBayar,
        bayar: bayar,
        kembali: kembali,
        kode_nota: "uuid",
      };
      dispatch(newPayment(newData));
    }
    console.log("ambil dari submit", listPembayaran);
  };
  // console.log("ambil dari luar", listPembayaran);
  // console.log(listPembayaran);

  return (
    <>
      <Col md={{ span: 4, offset: 8 }} className="fixed-bottom">
        <Card className="px-4 py-2">
          <div className="d-flex justify-content-between align-items-center  mt-2">
            <strong>Bayar </strong>
            <input
              type="number"
              max={totalBayar}
              onChange={handleChangeBayar}
              className="form-control "
              // dir="rtl"
              style={{ width: "28%", height: "30px" }}
              placeholder=""
            />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Total </strong>
            <strong className="">{rupiah(totalBayar)}</strong>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Kembali </strong>
            <strong className={kembali < 0 ? `text-danger ` : `text-primary `}>
              {rupiah(kembali)}
            </strong>
          </div>

          <Button
            className="bg-primary-2 my-2 border-0"
            onClick={onSubmit}
            // onClick={() => dispatch(newPayment(newData))}
          >
            KONFIRMASI PEMBAYARAN
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Index;
