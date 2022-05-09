import { useEffect, useState } from "react";
import { NavbarComponent, SidebarComponent } from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import { TabelProdukComponent } from "../../component";
// import { useGetDataProduct } from "../../hooks/index";
import { useSubscribeDataProduct } from "../../hooks/index";

const Index = () => {
  // gql getData
  // const { data, loading, error } = useGetDataProduct();

  // graphgl subscribeDataProduk
  const { data, loading, error } = useSubscribeDataProduct();

  // state produk
  const [product, setProduct] = useState();

  // setProduct dari data graphql
  useEffect(() => {
    if (data) {
      setProduct(data?.test_Produk || []);
    }
  }, [data]);

  return (
    <>
      <NavbarComponent home={false} />
      <Container>
        <Row>
          <Col md={3}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <TabelProdukComponent data={product || []} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
