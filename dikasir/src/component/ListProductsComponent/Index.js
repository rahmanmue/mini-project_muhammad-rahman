import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardComponent, SearchComponent } from "../index";
// import { addListItem } from "../../store/ListItemSlice";
// import { useDispatch } from "react-redux";

const Index = ({ data }) => {
  // const [listItem, setListItem] = useState([]);

  // const addListItem = (value) => {
  //   const addListItem = [...listItem, value];
  //   setListItem(addListItem);
  // };

  // console.log(listItem);

  // const dispatch = useDispatch();

  return (
    <>
      <Col md={7} className="mt-5">
        <Row>
          <SearchComponent />
        </Row>

        <Row>
          {data.map((item, index) => (
            <CardComponent key={item.id} item={item} />
          ))}
        </Row>
      </Col>
    </>
  );
};
export default Index;
