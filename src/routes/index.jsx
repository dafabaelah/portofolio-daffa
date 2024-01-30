import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PdfShow from "../pages/PdfShow";

const Root = () => {
    return(
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/cv" element={<PdfShow />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;