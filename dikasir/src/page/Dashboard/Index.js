import React, { useState } from "react";
import {
  NavbarComponent,
  SidebarComponent,
  DashboardComponent,
  LoadingComponent,
  ErrorComponent,
} from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import {
  useSubscribeJumlahProduk,
  useSubscribeJumlahStok,
  useSubscribeJumlahTransaksi,
  useSubscribePengeluaran,
  useSubscribePemasukan,
  useSubscribeDataProduct,
} from "../../hooks";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: jP, loading: lP, error: errP } = useSubscribeJumlahProduk();
  const { data: jS, loading: lS, error: errS } = useSubscribeJumlahStok();
  const {
    data: jTs,
    loading: lTs,
    error: errTs,
  } = useSubscribeJumlahTransaksi();
  const { data: jPl, loading: lPl, error: errPl } = useSubscribeDataProduct();
  const { data: jPm, loading: lPm, error: errPm } = useSubscribePemasukan();

  const [a, sa] = useState();
  const [b, sb] = useState();
  const [c, sc] = useState();
  const [d, sd] = useState();
  const [e, se] = useState();

  useEffect(() => {
    if (jP || jS || jTs || jPl || jPm) {
      sa(jP?.dikasir_Produk_aggregate || []);
      sb(jS?.dikasir_Produk_aggregate || []);
      sc(jTs?.dikasir_Transaksi_aggregate || []);
      sd(jPl?.dikasir_Produk || []);
      se(jPm?.dikasir_Transaksi_aggregate || []);
    }
  }, [jP, jS, jTs, jPl, jPm]);

  const jumlahProduk = a?.aggregate?.count || "0";
  const jumlahSemuaStok = b?.aggregate?.sum?.stok || "0";
  const jumlahTransaksi = c?.aggregate?.count || "0";
  const jumlahPembayaran = e?.aggregate?.sum?.total || "";
  let totalHargaSemuaProduk = 0;
  totalHargaSemuaProduk = d?.reduce((total, aliasListItem) => {
    return total + aliasListItem.harga * aliasListItem.stok;
  }, 0);

  // console.log(p);
  // console.log(q);
  // console.log(r);
  // console.log(s);
  // console.log(t);

  // return <LoadingComponent />;

  if (lP || lS || lTs || lPl || lPm) {
    return <LoadingComponent />;
  } else if (errP || errPl || errPm || errS || errTs) {
    return <ErrorComponent />;
  } else if (jP || jS || jTs || jPl || jPm) {
    return (
      <>
        <NavbarComponent home={false} />
        <Container fluid>
          <Row>
            <Col md={2}>
              <SidebarComponent />
            </Col>
            <Col md={9}>
              <DashboardComponent
                jP={jumlahProduk}
                jS={jumlahSemuaStok}
                jTs={jumlahTransaksi}
                jPl={totalHargaSemuaProduk}
                jPm={jumlahPembayaran}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Dashboard;
