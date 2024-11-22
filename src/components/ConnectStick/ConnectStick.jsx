import React from "react";

const ConnectStick = () => {
  return (
    <div>
      <ul>
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a
            target="_blank"
            href="https://linkedin.com/in/naresh-saini-profile/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a target="_blank" href="https://github.com/ns2511">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a target="_blank" href="mailto:naresh.saini2511@gmail.com">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
          <a target="_blank" href="https://www.instagram.com/naresh.saini.010/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ConnectStick;
