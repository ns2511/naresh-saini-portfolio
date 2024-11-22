import { color } from "framer-motion";
import React from "react";

const NameLogo = () => {
  return (
    <div
      style={{
        height: "3rem",
        width: "8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "var(--sub-color)",
        borderRight:"solid 1px",
        borderBottom:"solid 1px",
        borderColor: "var(--sub-alt-color)",
        borderBottomRightRadius: "12px",
        zIndex: "5",
        boxShadow: "var(--shadow-2)",
        backdropFilter: "blur(10px)",
        fontSize:"1.5rem"
      }}
    >
      <span>Give a Star </span>
        </div>
  );
};

export default NameLogo;
