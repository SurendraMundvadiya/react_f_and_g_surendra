import React from "react";
import { Routes, Route } from "react-router-dom";
import Feedbackform from "./screens/feedbackform/Feedbackform";
import ThanksPage from "./screens/thanks_page/ThanksPage";
import TablePage from "./screens/tablepage/TablePage";
const RouterPage = () => {
    return (
        <Routes>
            <Route path="/feedback_form" element={<Feedbackform />} />
            <Route path="/thanks_page" element={<ThanksPage />} />
            <Route path="/data_table" element={<TablePage />} />
            <Route path="*" element={<Feedbackform />} />
        </Routes>
    );
};

export default RouterPage;
