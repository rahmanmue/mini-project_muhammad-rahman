import React from "react";
import { minusIcon, plusIcon, deleteIcon } from "../../assets";
import {
  deleteListItem,
  increment,
  decrement,
} from "../../store/ListItemSlice";
import { useDispatch, useSelector } from "react-redux";
// import { Row, Col } from "react-bootstrap";
import { rupiah } from "../../util";

const Index = ({ item, index }) => {
  const { nama, harga, id } = item;
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);
  const quantity = listItem[index].quantity;
  console.log(listItem.quantity);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      className="d-flex justify-content-between py-2"
      style={{ boxSizing: "border-box" }}
    >
      <div className="d-flex flex-column justify-content-center">
        <div>
          <strong className="title-item">{nama}</strong>
        </div>
        <div>
          <span>{rupiah(harga)}</span>
        </div>
      </div>
      <div className="d-flex align-items-center ms-auto me-5">
        <div type="button" onClick={() => dispatch(decrement(index))}>
          <img src={minusIcon} alt="minus" />
        </div>
        {/* <input
          type="number"
          name="qty"
          min="1"
          max={stok}
          value={quantity}
          className="form-control"
          style={{ width: "90px", height: "35px" }}
          // value={qty}
          onChange={() => handleChange()}
        /> */}
        <div
          className="bg-primary-4 px-4 mx-2"
          style={{ boxSizing: "border-box", width: "50px" }}
        >
          <strong>{`${quantity}`}</strong>
        </div>

        <div type="button" onClick={() => dispatch(increment(index))}>
          <img src={plusIcon} alt="plus" />
        </div>
      </div>
      <div className="d-flex align-items-center ">
        <div
          type="button"
          // className="ms-auto"
          onClick={() => dispatch(deleteListItem(id))}
        >
          <img src={deleteIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default Index;
