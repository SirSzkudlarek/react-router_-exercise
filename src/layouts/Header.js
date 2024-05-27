import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Header.css";

import greece from "../images/greece.jpg";
import rome from "../images/rome.jpg";
import egypt from "../images/egypt.jpg";
import nordic from "../images/nordic_tribes.jpg";
import desert from "../images/desert.jpg";

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<img src={greece} alt="greece"></img>}></Route>
        <Route
          path="/products"
          element={<img src={rome} alt="rome"></img>}
        ></Route>
        <Route
          path="/contact"
          element={<img src={egypt} alt="egypt"></img>}
        ></Route>
        <Route
          path="/admin"
          element={<img src={nordic} alt="nordic_tribes"></img>}
        ></Route>
        <Route path="*" element={<img src={desert} alt="desert"></img>}></Route>
      </Routes>
    </>
  );
};

export default Header;
