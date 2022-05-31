import HomePage from "../pages/homePage/homePage";
import ErrorPage from "../pages/errorPage/errorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

const RouterComponent = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<HomePage />} />

                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </Router>
    );
  };
  
  export default RouterComponent;