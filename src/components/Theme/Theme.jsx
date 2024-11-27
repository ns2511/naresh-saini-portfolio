import React, { useState, useEffect, useRef } from "react";
import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideTheme } from "../../features/themeSlice";

function Theme() {
const isVisible = useSelector((state)=>state.theme.isVisible);
const dispatch = useDispatch();

const handleHide= ()=>{
  dispatch(hideTheme());
}


useEffect(() => {
  if (isVisible) {
    document.body.addEventListener("click", handleHide);
  } else {
    document.getElementsByName('container').removeEventListener("click", handleHide);
  }

  return () => {
    document.body.removeEventListener("click", handleHide);
  };
}, [isVisible]);



  const [currentTheme, setCurrentTheme] = useState(0);
 
  const themes = [
    {
      name: "draculla",
      bgColor: "#181818",
      mainColor: "#17b8bd",
      caretColor: "#17b8bd",
      subColor: "#53565a",
      subAltColor: "#121212",
      textColor: "#bbcdcd",
      errorColor: "#da3333",
      errorExtraColor: "#791717",
      colorfulErrorColor: "#da3333",
      colorfulErrorExtraColor: "#791717",
    },
    {
      name: "lavender",
      bgColor: "#ebe1ef",
      mainColor: "#8a5bd6",
      caretColor: "#212b43",
      subColor: "#a28db8",
      subAltColor: "#dac7e2",
      textColor: "#212b43",
      errorColor: "#f794ca",
      errorExtraColor: "#f279c2",
      colorfulErrorColor: "#f794ca",
      colorfulErrorExtraColor: "#f279c2",
    },
    {
      name: "aurora",
      bgColor: "#011926",
      mainColor: "#00e980",
      caretColor: "#00e980",
      subColor: "#245c69",
      subAltColor: "#000c13",
      textColor: "#fff",
      errorColor: "#b94da1",
      errorExtraColor: "#9b3a76",
      colorfulErrorColor: "#b94da1",
      colorfulErrorExtraColor: "#9b3a76",
    },
    {
      name: "dragon",
      bgColor: "#07737a",
      mainColor: "#88dbdf",
      caretColor: "#88dbdf",
      subColor: "#f3e03b",
      subAltColor: "#26858b",
      textColor: "#ffffff",
      errorColor: "#ff585d",
      errorExtraColor: "#c04455",
      colorfulErrorColor: "#ff585d",
      colorfulErrorExtraColor: "#c04455",
    },
    {
      name: "aether",
      bgColor: "#101820",
      mainColor: "#eedaea",
      caretColor: "#eedaea",
      subColor: "#cf6bdd",
      subAltColor: "#292136",
      textColor: "#eedaea",
      errorColor: "#ff5253",
      errorExtraColor: "#e3002b",
      colorfulErrorColor: "#ff5253",
      colorfulErrorExtraColor: "#e3002b",
    },
  ];

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme !== null) {
      setCurrentTheme(Number(savedTheme));
    }
  }, []);

  useEffect(() => {
    const selectedTheme = themes[currentTheme];
    document.documentElement.style.setProperty(
      "--bg-color",
      selectedTheme.bgColor
    );
    document.documentElement.style.setProperty(
      "--main-color",
      selectedTheme.mainColor
    );
    document.documentElement.style.setProperty(
      "--caret-color",
      selectedTheme.caretColor
    );
    document.documentElement.style.setProperty(
      "--sub-color",
      selectedTheme.subColor
    );
    document.documentElement.style.setProperty(
      "--sub-alt-color",
      selectedTheme.subAltColor
    );
    document.documentElement.style.setProperty(
      "--text-color",
      selectedTheme.textColor
    );
    document.documentElement.style.setProperty(
      "--error-color",
      selectedTheme.errorColor
    );
    document.documentElement.style.setProperty(
      "--error-extra-color",
      selectedTheme.errorExtraColor
    );
    document.documentElement.style.setProperty(
      "--colorful-error-color",
      selectedTheme.colorfulErrorColor
    );
    document.documentElement.style.setProperty(
      "--colorful-error-extra-color",
      selectedTheme.colorfulErrorExtraColor
    );

    localStorage.setItem("selectedTheme", currentTheme);
  }, [currentTheme, themes]);

  const handleThemeChange = (index) => {
    setCurrentTheme(index);
  };
 
  return (
    <div className={styles.container}>
      <div onClick={e=>e.stopPropagation()} className={styles.box}>
      <div className={styles.wrap}>
      {themes.map((theme, index) => (
        <button
          key={theme.name}
          className={styles.itemBtn}
          style={{
            display: "flex",
            padding: "5px",
            margin:"1rem",
            justifyContent:"center",
            alignItems:"center",
            width:"6rem",
            height:"1.5rem",
            border: `solid 3px ${
              index === currentTheme ? theme.mainColor : "transparent"
            }`, 
            borderRadius: "10px",
            backgroundColor: theme.bgColor,
          }}
          
          onClick={() => handleThemeChange(index)} // Change theme on click
        >
          
          <div
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: theme.mainColor,
              margin: "0 5px",
            }}
          ></div>
          <div
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: theme.textColor,
              margin: "0 5px",
            }}
          ></div>
          <div
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: theme.subColor,
              margin: "0 5px",
            }}
          ></div>
          <div
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: theme.subAltColor,
              margin: "0 5px",
            }}
          ></div>
        </button>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Theme;
