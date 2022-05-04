import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardComponent, SearchComponent } from "../index";
// import { addListItem } from "../../store/ListItemSlice";
// import { useDispatch } from "react-redux";

const Index = ({ data }) => {
  return (
    <>
      <Col md={7} className="mt-5">
        <Row>
          <SearchComponent />
        </Row>

        <Row>
          {data.map((item) => (
            <CardComponent key={item.id} data={item} />
          ))}
        </Row>
      </Col>
    </>
  );
};
export default Index;
