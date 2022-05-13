import React from "react";
import { Container } from "react-bootstrap";
import { serverErrorIcon } from "../../assets";

const Error = () => {
  return (
    <Container>
      <div
        className="d-flex flex-column gap-4 justify-content-center align-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <img
          src={serverErrorIcon}
          alt="no-data"
          className="img-fluid"
          width={"20%"}
        />
        <div className="fw-bold text-dark-2 mt-2">
          Oopss... jaringan bermasalah
        </div>
      </div>
    </Container>
  );
};

export default Error;
