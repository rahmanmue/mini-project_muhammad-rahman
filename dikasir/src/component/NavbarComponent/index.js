import React from "react";
import { logoIcon, userIcon } from "../../assets/index";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Index = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary-2" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoIcon} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className="pe-5">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#pricing " className="pe-5">
              Produk
            </Nav.Link>
            <Nav.Link href="#pricing" className="pe-5">
              Riwayat Transaksi
            </Nav.Link>
          </Nav>
          <div className="ms-auto">
            <Button className="bg-transparent border border-white rounded me-2 px-4">
              Menu Kasir
            </Button>
            <Button className="bg-primary-3 border-0 rounded">
              <div className="d-flex justify-content-center">
                <img src={userIcon} alt="user" className="me-2" />
                KASIR001
              </div>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Index;
