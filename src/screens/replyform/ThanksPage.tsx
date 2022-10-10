import React from "react";
import CheckBoxIcon from "../../assets/CheckBoxIcon";
import "./ThanksPage.css";

const ThanksPage = () => {
    return (
        <div className="thanks_box">
            <div className="inner_thanks_box">
                <CheckBoxIcon />
                <h2>Thank you for providing the feedback</h2>
                <h4>We will work towards improving your experience</h4>
                <button>Close</button>
            </div>
        </div>
    );
};

export default ThanksPage;
