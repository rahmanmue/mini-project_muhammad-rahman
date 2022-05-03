import React from "react";
import { Col } from "react-bootstrap";
import {
  InfoComponent,
  TotalPaymentComponent,
  ListItemComponent,
} from "../index";

import { useSelector } from "react-redux";

const Index = () => {
  const listItem = useSelector((state) => state.List.listItem);
  console.log(listItem);

  return (
    <>
      <Col md={4} style={{ marginBottom: "200px" }} className="shadow px-3">
        <InfoComponent />
        {listItem.map((item, index) => (
          <ListItemComponent item={item} key={item.id} index={index} />
        ))}
        <TotalPaymentComponent />
      </Col>
    </>
  );
};

export default Index;
