import React from "react";
import "./App.css";
import RouterPage from "./RouterPage";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="main_box">
                <RouterPage />
            </div>
        </BrowserRouter>
    );
}

export default App;
