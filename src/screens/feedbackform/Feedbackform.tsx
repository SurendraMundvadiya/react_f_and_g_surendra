import React from "react";
import "./Feedbackform.css";
import QuesForm from "./radio_ques/QuesForm";
import TextField from "./input_ques/TextField";

const Feedbackform = () => {
    return (
        <div className="outer_box">
            <div className="header">
                <h2>Aromatic bar</h2>
            </div>
            <div className="content_box">
                <div className="content_inner_box">
                    <TextField required title={"Customer Name"} />
                    <TextField required title={"Email"} />
                    <TextField required title={"Phone"} />
                </div>
                <div className="content_inner_box">
                    <QuesForm required title={"Please rate the quality of the service you received from your host."} />
                    <QuesForm required title={"Please rate the quality of your beverage."} />
                    <QuesForm required title={"Was our restaurant clean?"} />
                    <QuesForm required title={"Please rate your overall dining experience."} />
                </div>
            </div>
            <div className="footer">
                <button>Submit Review</button>
            </div>
        </div>
    );
};

export default Feedbackform;
