import React, { useState, useEffect, useRef } from "react";
import styles from "./Theme.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideTheme } from "../../features/themeSlice";

function Theme() {
  const isVisible = useSelector((state) => state.theme.isVisible);
  const dispatch = useDispatch();

  const handleHide = () => {
    dispatch(hideTheme());
  };

  useEffect(() => {
    if (isVisible) {
      document.body.addEventListener("click", handleHide);
    } else {
      document
        .getElementsByName("container")
        .removeEventListener("click", handleHide);
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
    {
      name: "theme1",
      bgColor: "#ffffff",
      mainColor: "#f5b1cc",
      caretColor: "#e45c96",
      subColor: "#93e8d3",
      subAltColor: "#f2f2f2",
      textColor: "#00ac8c",
      errorColor: "#ffe495",
      errorExtraColor: "#e45c96",
      colorfulErrorColor: "#ffe485",
      colorfulErrorExtraColor: "#e45c96",
    },
    {
      name: "theme2",
      bgColor: "#ffffff",
      mainColor: "#40d672",
      caretColor: "#40d672",
      subColor: "#d5d5d5",
      subAltColor: "#cafad8",
      textColor: "#1d221f",
      errorColor: "#ff5f5f",
      errorExtraColor: "#d22a2a",
      colorfulErrorColor: "#ff5f5f",
      colorfulErrorExtraColor: "#d22a2a",
    },
    {
      name: "theme3",
      bgColor: "#ffffff",
      mainColor: "#212b43",
      caretColor: "#212b43",
      subColor: "#62cfe6",
      subAltColor: "#ddeff3",
      textColor: "#212b43",
      errorColor: "#f19dac",
      errorExtraColor: "#e58c9d",
      colorfulErrorColor: "#f19dac",
      colorfulErrorExtraColor: "#e58c9d",
    },
    {
      name: "theme4",
      bgColor: "#ffffff",
      mainColor: "#ff360d",
      caretColor: "#ff0000",
      subColor: "#b7b7b7",
      subAltColor: "#ececec",
      textColor: "#000000",
      errorColor: "#d70000",
      errorExtraColor: "#b00000",
      colorfulErrorColor: "#000000",
      colorfulErrorExtraColor: "#000000",
    },
    {
      name: "theme5",
      bgColor: "#ffffff",
      mainColor: "#5ed5f3",
      caretColor: "#303030",
      subColor: "#d64090",
      subAltColor: "#edf8fa",
      textColor: "#0a282f",
      errorColor: "#000000",
      errorExtraColor: "#c9c9c9",
      colorfulErrorColor: "#ca4754",
      colorfulErrorExtraColor: "#7e2a33",
    },
    {
      name: "theme6",
      bgColor: "#ffffff",
      mainColor: "#2d2076",
      caretColor: "#fbdb8c",
      subColor: "#385eca",
      subAltColor: "#c8cedf",
      textColor: "#2d2076",
      errorColor: "#f2ce83",
      errorExtraColor: "#f2ce83",
      colorfulErrorColor: "#f2ce83",
      colorfulErrorExtraColor: "#f2ce83",
    },
    {
      name: "theme7",
      bgColor: "#fffbfe",
      mainColor: "#b94189",
      caretColor: "#e099d6d9",
      subColor: "#e094c2",
      subAltColor: "#ecdceed9",
      textColor: "#5c2954",
      errorColor: "#ff6f69",
      errorExtraColor: "#ff6f69",
      colorfulErrorColor: "#bc7fc0",
      colorfulErrorExtraColor: "#bc41b1",
    },
    {
      name: "theme8",
      bgColor: "#fffaf3",
      mainColor: "#56949f",
      caretColor: "#ea9d34",
      subColor: "#c4a7e7",
      subAltColor: "#f0e9df",
      textColor: "#286983",
      errorColor: "#b4637a",
      errorExtraColor: "#d7827e",
      colorfulErrorColor: "#b4637a",
      colorfulErrorExtraColor: "#d7827e",
    },
    {
      name: "theme9",
      bgColor: "#fff9f2",
      mainColor: "#55c6f0",
      caretColor: "#1e107a",
      subColor: "#1e107a",
      subAltColor: "#e5ddd4",
      textColor: "#1d1e1e",
      errorColor: "#fb5745",
      errorExtraColor: "#b03c30",
      colorfulErrorColor: "#fb5745",
      colorfulErrorExtraColor: "#b03c30",
    },
    {
      name: "theme10",
      bgColor: "#f5f5f5",
      mainColor: "#363636",
      caretColor: "#0d0d0d",
      subColor: "#4f4f4f",
      subAltColor: "#e0e0e0",
      textColor: "#1f1f1f",
      errorColor: "#ff0008",
      colorfulErrorColor: "#ff0008",
    },
    {
      name: "theme11",
      bgColor: "#eceff4",
      caretColor: "#8fbcbb",
      mainColor: "#8fbcbb",
      subColor: "#6a7791",
      subAltColor: "#d8dee9",
      textColor: "#8fbcbb",
      errorColor: "#bf616a",
      errorExtraColor: "#793e44",
      colorfulErrorColor: "#bf616a",
      colorfulErrorExtraColor: "#793e44",
    },
    {
      name: "theme12",
      bgColor: "#fdf6e3",
      mainColor: "#859900",
      caretColor: "#dc322f",
      subColor: "#2aa198",
      subAltColor: "#e2d8be",
      textColor: "#181819",
      errorColor: "#d33682",
      errorExtraColor: "#9b225c",
      colorfulErrorColor: "#d33682",
      colorfulErrorExtraColor: "#9b225c",
    },
    {
      name: "theme13",
      bgColor: "#282828",
      mainColor: "#fabd2f",
      caretColor: "#d65d0e",
      subColor: "#8ec07c",
      subAltColor: "#3c3836",
      textColor: "#ebdbb2",
      errorColor: "#fb4934",
      errorExtraColor: "#cc241d",
      colorfulErrorColor: "#fb4934",
      colorfulErrorExtraColor: "#cc241d",
    },
    {
      name: "theme14",
      bgColor: "#002b36",
      mainColor: "#2aa198",
      caretColor: "#268bd2",
      subColor: "#073642",
      subAltColor: "#586e75",
      textColor: "#839496",
      errorColor: "#dc322f",
      errorExtraColor: "#cb4b16",
      colorfulErrorColor: "#dc322f",
      colorfulErrorExtraColor: "#cb4b16",
    },
    {
      name: "theme15",
      bgColor: "#1e1e1e",
      mainColor: "#007acc",
      caretColor: "#569cd6",
      subColor: "#3c3c3c",
      subAltColor: "#252526",
      textColor: "#d4d4d4",
      errorColor: "#d16969",
      errorExtraColor: "#c586c0",
      colorfulErrorColor: "#d16969",
      colorfulErrorExtraColor: "#c586c0",
    },
    {
      name: "theme16",
      bgColor: "#282c34",
      mainColor: "#61dafb",
      caretColor: "#e06c75",
      subColor: "#98c379",
      subAltColor: "#282c34",
      textColor: "#abb2bf",
      errorColor: "#e06c75",
      errorExtraColor: "#be5046",
      colorfulErrorColor: "#e06c75",
      colorfulErrorExtraColor: "#be5046",
    },
    {
      name: "theme17",
      bgColor: "#1a1a1a",
      mainColor: "#ff79c6",
      caretColor: "#bd93f9",
      subColor: "#8be9fd",
      subAltColor: "#44475a",
      textColor: "#f8f8f2",
      errorColor: "#ff5555",
      errorExtraColor: "#ff6e6e",
      colorfulErrorColor: "#ff5555",
      colorfulErrorExtraColor: "#ff6e6e",
    },
    {
      name: "theme18",
      bgColor: "#272822",
      mainColor: "#a6e22e",
      caretColor: "#66d9ef",
      subColor: "#f92672",
      subAltColor: "#49483e",
      textColor: "#f8f8f2",
      errorColor: "#e57373",
      errorExtraColor: "#ff5252",
      colorfulErrorColor: "#e57373",
      colorfulErrorExtraColor: "#ff5252",
    },
    {
      name: "theme19",
      bgColor: "#202124",
      mainColor: "#34a853",
      caretColor: "#4285f4",
      subColor: "#ea4335",
      subAltColor: "#fbbc05",
      textColor: "#e8eaed",
      errorColor: "#ff6d6d",
      errorExtraColor: "#f28b82",
      colorfulErrorColor: "#ff6d6d",
      colorfulErrorExtraColor: "#f28b82",
    },
    {
      name: "theme20",
      bgColor: "#101116",
      mainColor: "#25c2a0",
      caretColor: "#e86648",
      subColor: "#a7c5eb",
      subAltColor: "#2a2e37",
      textColor: "#d9e6f2",
      errorColor: "#f86e51",
      errorExtraColor: "#e44134",
      colorfulErrorColor: "#f86e51",
      colorfulErrorExtraColor: "#e44134",
    },
    {
      name: "theme21",
      bgColor: "#fafafa",
      mainColor: "#3f51b5",
      caretColor: "#673ab7",
      subColor: "#03a9f4",
      subAltColor: "#e1e2e1",
      textColor: "#212121",
      errorColor: "#f44336",
      errorExtraColor: "#d32f2f",
      colorfulErrorColor: "#f44336",
      colorfulErrorExtraColor: "#d32f2f",
    },
    {
      name: "theme22",
      bgColor: "#212121",
      mainColor: "#ff9800",
      caretColor: "#ff5722",
      subColor: "#ffc107",
      subAltColor: "#616161",
      textColor: "#ffffff",
      errorColor: "#f4511e",
      errorExtraColor: "#bf360c",
      colorfulErrorColor: "#f4511e",
      colorfulErrorExtraColor: "#bf360c",
    },
    {
      name: "theme23",
      bgColor: "#141414",
      mainColor: "#1db954",
      caretColor: "#1ed760",
      subColor: "#535353",
      subAltColor: "#282828",
      textColor: "#ffffff",
      errorColor: "#ff4d4d",
      errorExtraColor: "#d32f2f",
      colorfulErrorColor: "#ff4d4d",
      colorfulErrorExtraColor: "#d32f2f",
    },
    {
      name: "theme24",
      bgColor: "#f4f4f4",
      mainColor: "#5865f2",
      caretColor: "#7289da",
      subColor: "#99aab5",
      subAltColor: "#e3e3e3",
      textColor: "#23272a",
      errorColor: "#f04747",
      errorExtraColor: "#d72c2c",
      colorfulErrorColor: "#f04747",
      colorfulErrorExtraColor: "#d72c2c",
    },
    {
      name: "theme25",
      bgColor: "#263238",
      mainColor: "#ffcc00",
      caretColor: "#ffab00",
      subColor: "#ffa000",
      subAltColor: "#37474f",
      textColor: "#eceff1",
      errorColor: "#d32f2f",
      errorExtraColor: "#b71c1c",
      colorfulErrorColor: "#d32f2f",
      colorfulErrorExtraColor: "#b71c1c",
    },
    {
      name: "theme26",
      bgColor: "#1b1b1b",
      mainColor: "#8e44ad",
      caretColor: "#9b59b6",
      subColor: "#16a085",
      subAltColor: "#34495e",
      textColor: "#ecf0f1",
      errorColor: "#e74c3c",
      errorExtraColor: "#c0392b",
      colorfulErrorColor: "#e74c3c",
      colorfulErrorExtraColor: "#c0392b",
    },
    {
      name: "theme27",
      bgColor: "#f5f5f5",
      mainColor: "#009688",
      caretColor: "#00796b",
      subColor: "#4caf50",
      subAltColor: "#c8e6c9",
      textColor: "#212121",
      errorColor: "#f44336",
      errorExtraColor: "#d32f2f",
      colorfulErrorColor: "#f44336",
      colorfulErrorExtraColor: "#d32f2f",
    },
    {
      name: "theme28",
      bgColor: "#1c1c1c",
      mainColor: "#ff7e67",
      caretColor: "#ff5e57",
      subColor: "#ffad5a",
      subAltColor: "#262626",
      textColor: "#d8d8d8",
      errorColor: "#ff4d4d",
      errorExtraColor: "#d32f2f",
      colorfulErrorColor: "#ff4d4d",
      colorfulErrorExtraColor: "#d32f2f",
    },
    {
      name: "theme29",
      bgColor: "#0d1117",
      mainColor: "#58a6ff",
      caretColor: "#1f6feb",
      subColor: "#21262d",
      subAltColor: "#30363d",
      textColor: "#c9d1d9",
      errorColor: "#f85149",
      errorExtraColor: "#da3633",
      colorfulErrorColor: "#f85149",
      colorfulErrorExtraColor: "#da3633",
    },
    {
      name: "theme30",
      bgColor: "#282828",
      mainColor: "#8ec07c",
      caretColor: "#b8bb26",
      subColor: "#83a598",
      subAltColor: "#3c3836",
      textColor: "#ebdbb2",
      errorColor: "#fb4934",
      errorExtraColor: "#cc241d",
      colorfulErrorColor: "#fb4934",
      colorfulErrorExtraColor: "#cc241d",
    },
    {
      name: "theme31",
      bgColor: "#191919",
      mainColor: "#e06c75",
      caretColor: "#98c379",
      subColor: "#56b6c2",
      subAltColor: "#282c34",
      textColor: "#abb2bf",
      errorColor: "#e06c75",
      errorExtraColor: "#be5046",
      colorfulErrorColor: "#e06c75",
      colorfulErrorExtraColor: "#be5046",
    },
    {
      name: "theme32",
      bgColor: "#2e3440",
      mainColor: "#88c0d0",
      caretColor: "#8fbcbb",
      subColor: "#d08770",
      subAltColor: "#4c566a",
      textColor: "#eceff4",
      errorColor: "#bf616a",
      errorExtraColor: "#a3be8c",
      colorfulErrorColor: "#bf616a",
      colorfulErrorExtraColor: "#a3be8c",
    },
    {
      name: "theme33",
      bgColor: "#282a36",
      mainColor: "#50fa7b",
      caretColor: "#f1fa8c",
      subColor: "#8be9fd",
      subAltColor: "#6272a4",
      textColor: "#f8f8f2",
      errorColor: "#ff5555",
      errorExtraColor: "#ff79c6",
      colorfulErrorColor: "#ff5555",
      colorfulErrorExtraColor: "#ff79c6",
    },
    {
      name: "theme34",
      bgColor: "#1e1e1e",
      mainColor: "#379683",
      caretColor: "#5cdb95",
      subColor: "#8ee4af",
      subAltColor: "#3c3c3c",
      textColor: "#edf5e1",
      errorColor: "#ff3333",
      errorExtraColor: "#d42a2a",
      colorfulErrorColor: "#ff3333",
      colorfulErrorExtraColor: "#d42a2a",
    },
    {
      name: "theme35",
      bgColor: "#0b0c10",
      mainColor: "#45a29e",
      caretColor: "#66fcf1",
      subColor: "#c5c6c7",
      subAltColor: "#1f2833",
      textColor: "#ffffff",
      errorColor: "#ff4040",
      errorExtraColor: "#d42d2d",
      colorfulErrorColor: "#ff4040",
      colorfulErrorExtraColor: "#d42d2d",
    },
    {
      name: "theme36",
      bgColor: "#282c34",
      mainColor: "#61dafb",
      caretColor: "#21a1f1",
      subColor: "#73c0f4",
      subAltColor: "#20232a",
      textColor: "#ffffff",
      errorColor: "#ff6b6b",
      errorExtraColor: "#e63946",
      colorfulErrorColor: "#ff6b6b",
      colorfulErrorExtraColor: "#e63946",
    },
    {
      name: "theme37",
      bgColor: "#1f1f1f",
      mainColor: "#f39c12",
      caretColor: "#f1c40f",
      subColor: "#d35400",
      subAltColor: "#2c3e50",
      textColor: "#ecf0f1",
      errorColor: "#e74c3c",
      errorExtraColor: "#c0392b",
      colorfulErrorColor: "#e74c3c",
      colorfulErrorExtraColor: "#c0392b",
    },
    {
      name: "theme38",
      bgColor: "#212121",
      mainColor: "#2196f3",
      caretColor: "#03a9f4",
      subColor: "#00bcd4",
      subAltColor: "#263238",
      textColor: "#ffffff",
      errorColor: "#f44336",
      errorExtraColor: "#d32f2f",
      colorfulErrorColor: "#f44336",
      colorfulErrorExtraColor: "#d32f2f",
    },
    {
      name: "theme39",
      bgColor: "#2c3e50",
      mainColor: "#e74c3c",
      caretColor: "#e67e22",
      subColor: "#f1c40f",
      subAltColor: "#34495e",
      textColor: "#ecf0f1",
      errorColor: "#c0392b",
      errorExtraColor: "#a93226",
      colorfulErrorColor: "#c0392b",
      colorfulErrorExtraColor: "#a93226",
    },
    {
      name: "theme40",
      bgColor: "#1e272e",
      mainColor: "#ff793f",
      caretColor: "#ff5252",
      subColor: "#34ace0",
      subAltColor: "#2c3a47",
      textColor: "#d2dae2",
      errorColor: "#ff3838",
      errorExtraColor: "#ff4d4d",
      colorfulErrorColor: "#ff3838",
      colorfulErrorExtraColor: "#ff4d4d",
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
      <div onClick={(e) => e.stopPropagation()} className={styles.box}>
        <div className={styles.wrap}>
          {themes.map((theme, index) => (
            <button
              key={theme.name}
              className={styles.itemBtn}
              style={{
                display: "flex",
                padding: "5px",
                margin: "1rem",
                justifyContent: "center",
                alignItems: "center",
                width: "6rem",
                height: "1.5rem",
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
