import React from "react";
import { Button } from "react-bootstrap";
import { dashboardIcon, produkIcon, transaksiIcon } from "../../assets";

const Index = () => {
  return (
    <div className="mt-4 ">
      <div className="d-flex flex-column gap-2 align-items-lg-start align-items-center">
        <Button className="bg-dark-2 border-0 w-75 menu-button">
          <div className=" d-flex align-items-center ms-3 gap-3 ">
            <img src={dashboardIcon} alt="dashboard" width={26} />
            <div>Dashboard</div>
          </div>
        </Button>
        <Button className="bg-dark-2 border-0 w-75 menu-button">
          <div className=" d-flex align-items-center ms-3 gap-3 ">
            <img src={produkIcon} alt="produk" width={26} />
            <div>Produk</div>
          </div>
        </Button>
        <Button
          className="bg-dark-2 border-0 w-75 menu-button"
          style={{ boxSizing: "border-box" }}
        >
          <div className=" d-flex align-items-center ms-3 gap-3 ">
            <img src={transaksiIcon} alt="transaksi" width={26} />
            <div>Transaksi</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Index;
