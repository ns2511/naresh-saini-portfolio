import React from "react";

const Spinner = (props) => {
  return (
    <div
      className="spinner-border"
      style={{width: props.size, height: props.size}}
      role="status"
    >
    </div>
  );
};

export default Spinner;
