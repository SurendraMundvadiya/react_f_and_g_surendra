import React from "react";
import CheckBoxIcon from "../../assets/CheckBoxIcon";
import "./ThanksPage.css";
import { useNavigate } from "react-router-dom";
const ThanksPage = () => {
    const navigate = useNavigate();
    return (
        <div className="thanks_box">
            <div className="inner_thanks_box">
                <CheckBoxIcon />
                <h2 className="thanks_text">Thank you for providing the feedback</h2>
                <h4 className="thanks_text">We will work towards improving your experience</h4>
                <button onClick={() => navigate("/data_table")}>Close</button>
            </div>
        </div>
    );
};

export default ThanksPage;
