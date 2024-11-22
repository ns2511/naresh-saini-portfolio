import React from "react";
// import notfound from '../assets/NotFound'
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1 style={{textAlign:"center", margin:"auto", marginBottom:"3rem"}}>404 - Page Not Found</h1>
      <button
        style={{
          width: "8rem",
          border: "1px solid var(--sub-color)",
          borderRadius: "12px",
          background: "var(--main-color)",
          color: "var(--sub-color)",
          padding: "6px",
          textAlign: "center",
          margin: "auto",
        }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
