import React from "react";
import ReactDOM from "react-dom/client";
import Me from "./components/Me";
import Hobbies from "./components/Hobbies";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Me />}></Route>
      <Route path="/me" element={<Me />}></Route>
      <Route path="/hobbies" element={<Hobbies />}></Route>
      <Route path="/contact" element={<Contacts />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
