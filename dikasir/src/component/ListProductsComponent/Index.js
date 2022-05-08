import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardComponent } from "../index";
import { searchIcon } from "../../assets";
import { filterProduct } from "../../utils/filterProduct";

const Index = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const [dataFilterProduct, setFilterProduct] = useState([]);

  const handleClick = () => {
    setFilterProduct(
      filterProduct({
        dataProduct: data,
        searchInput: searchInput,
      })
    );
  };

  useEffect(() => {
    handleClick();
  }, [data, searchInput]);

  console.log("Filter :", dataFilterProduct);

  return (
    <>
      <Col md={7} className="mt-5">
        <Row>
          <Col md={6}>
            {/* <Form.Group className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                value={searchInput}
              />
              <span className="bg-primary-3 border-0" onClick={handleClick}>
                <img src={searchIcon} alt="search-icon" />
              </span>
            </Form.Group> */}

            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Cari ..."
                aria-label="cari"
                aria-describedby="cari"
                onChange={handleChange}
              />
              <span
                className="input-group-text bg-primary-3"
                id="cari"
                onClick={handleClick}
              >
                <img src={searchIcon} alt="search-icon" />
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          {dataFilterProduct.map((item) => (
            <CardComponent key={item.id_product} data={item} />
          ))}
        </Row>
      </Col>
    </>
  );
};
export default Index;
