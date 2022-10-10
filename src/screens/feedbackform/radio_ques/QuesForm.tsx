import React, { memo, useState } from "react";
import "./QuesForm.css";
interface QuesFormProps {
    title?: string;
    required?: boolean;
}
const QuesForm: React.FC<QuesFormProps> = (props) => {
    const { title, required } = props;
    const [value, setValue] = useState("Excellent");
    return (
        <div className="question_box">
            <h4>
                {title}
                {required && <span style={{ color: "red" }}>*</span>}
            </h4>
            <div className="input_box">
                <div className="input_inner_box" onClick={() => setValue("Excellent")}>
                    <input type="checkbox" name="Excellent" checked={value === "Excellent"} />
                    <label htmlFor="Excellent">Excellent</label>
                </div>
                <div className="input_inner_box" onClick={() => setValue("Good")}>
                    <input type="checkbox" name="Good" checked={value === "Good"} />
                    <label htmlFor="Good">Good</label>
                </div>
                <div className="input_inner_box" onClick={() => setValue("Fair")}>
                    <input type="checkbox" name="Fair" checked={value === "Fair"} />
                    <label htmlFor="Fair">Fair</label>
                </div>
                <div className="input_inner_box" onClick={() => setValue("Bad")}>
                    <input type="checkbox" name="Bad" checked={value === "Bad"} />
                    <label htmlFor="Bad">Bad</label>
                </div>
            </div>
        </div>
    );
};

export default memo(QuesForm);
