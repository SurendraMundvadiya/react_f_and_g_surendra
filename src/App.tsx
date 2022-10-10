import React from "react";
import "./App.css";
import Feedbackform from "./screens/feedbackform/Feedbackform";
import ThanksPage from "./screens/replyform/ThanksPage";
import TablePage from "./screens/tablepage/TablePage";

function App() {
    return (
        <div className="main_box">
            <Feedbackform />
            {/* <ThanksPage /> */}
            {/* <TablePage /> */}
        </div>
    );
}

export default App;
