import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import {
  NavbarComponent,
  ListProductsComponent,
  ResultsComponent,
} from "../../component/index";
import { v4 as uuidv4 } from "uuid";
import { addUid } from "../../store/ListItemSlice";
// import { useGetDataProduct } from "../../hooks/index";

import { gql, useQuery } from "@apollo/client";

const getDataProduk = gql`
  query MyQuery {
    test_Produk {
      id
      namaProduk
      stok
      harga
      gambar
    }
  }
`;

const Index = () => {
  // graphql
  const { data, loading, error } = useQuery(getDataProduk);

  // graphql hooks
  // const { data, loading, error } = useGetDataProduct();

  // state produk
  const [product, setProduct] = useState();

  // store redux
  const listPayment = useSelector((state) => state.List.listPayment);
  const dispatch = useDispatch();

  // genetate uuid baru setiap ada listPayment
  const uuid = uuidv4();
  useEffect(() => {
    dispatch(addUid(uuid));
  }, [listPayment]);

  // setProduct dari data graphql
  useEffect(() => {
    if (data) {
      setProduct(data?.test_Produk || []);
    }
  }, [data]);

  // return data
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error..</div>;
  if (data.test_Produk) {
    return (
      <>
        <NavbarComponent home={true} />
        <Container fluid>
          <Row className="mb-5">
            <Col md={1}></Col>
            <ListProductsComponent data={product || []} />
            <ResultsComponent />
          </Row>
        </Container>
      </>
    );
  }
};

export default Index;
