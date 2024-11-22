import { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import MenuBar from "./components/Menu/MenuBar/MenuBar";
import NotFound from "./components/NotFound";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import SettingsMenu from "./components/Settings/SettingsMenu/SettingsMenu";
import Theme from "./components/Settings/SettingsItems/Theme";
import FontWidth from "./components/Settings/SettingsItems/FontWidth";
import FontStyle from "./components/Settings/SettingsItems/FontStyle";
import FontSize from "./components/Settings/SettingsItems/FontSize";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/aboutme",
      element: (
        <div>
          <Navbar />
          <AboutMe />
        </div>
      ),
    },
    {
      path: "/portfolio",
      element: (
        <div>
          <Navbar />
          <Portfolio />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Navbar />
          <Contact />
        </div>
      ),
    },
    {
      path: "/settings/theme",
      element: (
        <div>
          <Navbar />
          {/* <SettingsMenu /> */}
          <Theme/>
        </div>
      ),
    },
    {
      path: "/settings/font-size",
      element: (
        <div>
          <Navbar />
          <SettingsMenu />
          <FontSize/>
        </div>
      ),
    },
    {
      path: "/settings/font-style",
      element: (
        <div>
          <Navbar />
          <SettingsMenu />
          <FontStyle/>
        </div>
      ),
    },
    {
      path: "/settings/font-width",
      element: (
        <div>
          <Navbar />
          <SettingsMenu />
          <FontWidth/>
        </div>
      ),
    },
    {path: '*',
      element: (
        <div>
          <Navbar />
          <NotFound/>
        </div>
      ),
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isFsizeOpen, setIsFsizeOpen] = useState(false);
  const [isFwidthOpen, setIsFwidthOpen] = useState(false);
  const [isFstyleOpen, setIsFstyleOpen] = useState(false);

  return (
    <>
     {/* <Theme></Theme> */}
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
      ></RouterProvider>
    </>
  );
}

export default App;
