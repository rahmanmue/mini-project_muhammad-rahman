import React from "react";

const Loading = () => {
  return (
    <div
      class="d-flex justify-content-center align-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <div
        class="spinner-border text-orange"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
