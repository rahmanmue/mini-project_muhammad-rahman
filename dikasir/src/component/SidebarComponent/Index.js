import React from "react";
import { Button } from "react-bootstrap";
import { dashboardIcon, produkIcon, transaksiIcon } from "../../assets";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="mt-4 ">
      <div className="d-flex flex-column gap-2 align-items-lg-start align-items-center">
        <Button className="bg-dark-2 border-0 w-75 menu-button">
          <Link to="/dashboard" className="text-decoration-none text-white">
            <div className=" d-flex align-items-center ms-3 gap-3 ">
              <img src={dashboardIcon} alt="dashboard" width={26} />
              <div>Dashboard</div>
            </div>
          </Link>
        </Button>
        <Button className="bg-dark-2 border-0 w-75 menu-button">
          <Link to="/produk" className="text-decoration-none text-white">
            <div className=" d-flex align-items-center ms-3 gap-3 ">
              <img src={produkIcon} alt="produk" width={26} />
              <div>Produk</div>
            </div>
          </Link>
        </Button>
        <Button
          className="bg-dark-2 border-0 w-75 menu-button"
          style={{ boxSizing: "border-box" }}
        >
          <Link to="/transaksi" className="text-decoration-none text-white">
            <div className=" d-flex align-items-center ms-3 gap-3 ">
              <img src={transaksiIcon} alt="transaksi" width={26} />
              <div>Transaksi</div>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
