import React from "react";
import { Col } from "react-bootstrap";
import {
  InfoComponent,
  TotalPaymentComponent,
  ListItemComponent,
} from "../index";

import { useSelector } from "react-redux";

const Index = () => {
  // list item dari store redux ketika data ditambahkan dari card komponen
  const listItem = useSelector((state) => state.List.listItem);

  return (
    <>
      <Col
        md={4}
        style={{ marginBottom: "170px", minHeight: "100vh" }}
        className="shadow px-3 pt-2"
      >
        <InfoComponent />
        {listItem.map((item, index) => (
          <ListItemComponent item={item} key={item.id_produk} index={index} />
        ))}
        <TotalPaymentComponent />
      </Col>
    </>
  );
};

export default Index;
