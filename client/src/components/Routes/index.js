import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Connexion from "../../pages/Log";
import Profil from "../Profil";
import PubliUploader from "../PubliUploader";

const index = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/log" element={<Connexion/>} />
        <Route path="/upload" element={<PubliUploader/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
  );
};

export default index;
