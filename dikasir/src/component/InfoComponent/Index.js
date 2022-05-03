import React from "react";
import { Button } from "react-bootstrap";
import { deleteAllIcon } from "../../assets";
import { deleteAllListItem } from "../../store/ListItemSlice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);
  const totalListItem = listItem.length;

  return (
    <div className="d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom">
      <div>
        <div>
          <strong>Total List : {totalListItem}</strong>
        </div>
      </div>
      <div>
        <Button
          className="bg-danger-2 border-0 d-flex justify-content-center rounded"
          onClick={() => dispatch(deleteAllListItem())}
        >
          <img src={deleteAllIcon} alt="delete-all" className="me-2" />
          <strong>ALL</strong>
        </Button>
      </div>
    </div>
  );
};

export default Index;
