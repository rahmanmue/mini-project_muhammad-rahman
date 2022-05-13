import React, { useState } from "react";
import {
  NavbarComponent,
  SidebarComponent,
  DashboardComponent,
  LoadingComponent,
} from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import {
  useSubscribeJumlahProduk,
  useSubscribeJumlahStok,
  useSubscribeJumlahTransaksi,
  useSubscribePengeluaran,
  useSubscribePemasukan,
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
  const { data: jPl, loading: lPl, error: errPl } = useSubscribePengeluaran();
  const { data: jPm, loading: lPm, error: errPm } = useSubscribePemasukan();

  const [a, sa] = useState();
  const [b, sb] = useState();
  const [c, sc] = useState();
  const [d, sd] = useState();
  const [e, se] = useState();

  useEffect(() => {
    if (jP || jS || jTs || jPl || jPm) {
      sa(jP?.test_Produk_aggregate || []);
      sb(jS?.test_Produk_aggregate || []);
      sc(jTs?.test_Transaksi_aggregate || []);
      sd(jPl?.test_Produk_aggregate || []);
      se(jPm?.test_Transaksi_aggregate || []);
    }
  }, [jP, jS, jTs, jPl, jPm]);

  const p = a?.aggregate?.count || "";
  const q = b?.aggregate?.sum?.stok || "";
  const r = c?.aggregate?.count || "";
  const s = d?.aggregate?.sum?.harga || "";
  const t = e?.aggregate?.sum?.total || "";
  // console.log(p);
  // console.log(q);
  // console.log(r);
  // console.log(s);
  // console.log(t);

  // return <LoadingComponent />;

  if (lP || lS || lTs || lPl || lPm) {
    return <LoadingComponent />;
  } else if (errP || errPl || errPm || errS || errTs) {
    return <p>Errorr ....</p>;
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
              <DashboardComponent jP={p} jS={q} jTs={r} jPl={s} jPm={t} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Dashboard;
