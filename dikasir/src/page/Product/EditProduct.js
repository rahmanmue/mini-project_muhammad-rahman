import React from "react";
import { NavbarComponent, SidebarComponent } from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import { EditProdukComponent } from "../../component";

const EditProduct = () => {
  // let { id } = useParams();

  // const idx = Number(id);
  // // console.log(idx);

  // const { data } = useGetDataProductById(idx);

  // const [datas, setDatas] = useState();

  // // useEffect(() => {
  // //   setData(data.test_Produk || []);
  // // }, [data]);

  // const getData = async () => {
  //   const x = await data;
  //   if (x) {
  //     setDatas(x.test_Produk_by_pk || []);
  //   }
  // };

  // getData();

  // console.log(datas);

  return (
    <>
      <NavbarComponent home={false} />
      <Container>
        <Row>
          <Col md={3}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <EditProdukComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditProduct;
