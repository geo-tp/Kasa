import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./layouts/Header";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./layouts/Footer";
import { HouseDetailsPage } from "./pages/HouseDetailsPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Here we use HashRouter to be able to serve website on Github Page */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/house/:houseId" element={<HouseDetailsPage />} />
        <Route path=":notfound" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
