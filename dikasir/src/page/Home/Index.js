import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import {
  NavbarComponent,
  ListProductsComponent,
  ResultsComponent,
} from "../../component/index";
import { gql, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { addUid } from "../../store/ListItemSlice";

const getData = gql`
  query MyQuery {
    test_Product {
      id
      nama
      stok
      harga
      gambar
    }
  }
`;

const Index = () => {
  const listPayment = useSelector((state) => state.List.listPayment);
  const dispatch = useDispatch();
  const uuid = uuidv4();
  // genetate uuid baru setiap ada listPayment
  useEffect(() => {
    dispatch(addUid(uuid));
  }, [listPayment]);

  console.log(
    "store Baru: ",
    useSelector((state) => state.List.uuid)
  );

  const [product, setProduct] = useState();
  const { data, loading, error } = useQuery(getData);
  useEffect(() => {
    if (data) {
      setProduct(data?.test_Product || []);
    }
  }, [data]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error..</div>;
  if (data.test_Product) {
    return (
      <>
        <NavbarComponent />
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
