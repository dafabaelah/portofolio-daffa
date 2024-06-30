import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PdfShow from "../pages/PdfShow";
import ErrorPage from "../pages/ErrorPage";

const Root = () => {
    return(
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/cv" element={<PdfShow />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;