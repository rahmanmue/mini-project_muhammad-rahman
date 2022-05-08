import React from "react";
import { logoIcon, userIcon } from "../../assets/index";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Index = ({ home }) => {
  if (home) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary-2" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoIcon} alt="logo" height="45" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
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
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary-2" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoIcon} alt="logo" height="45" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="ms-auto">
              <Button className="bg-transparent border border-white rounded me-2 px-4">
                Menu Kasir
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};
export default Index;
