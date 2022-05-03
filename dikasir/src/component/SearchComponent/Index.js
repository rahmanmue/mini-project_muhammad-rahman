import React from "react";
import { Col, Form, FormControl, Button } from "react-bootstrap";
import { searchIcon } from "../../assets";

const Index = () => {
  return (
    <Col md={6}>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className="bg-primary-3 border-0">
          <img src={searchIcon} alt="search-icon" />
        </Button>
      </Form>
    </Col>
  );
};

export default Index;
