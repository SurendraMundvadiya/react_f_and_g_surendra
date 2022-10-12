import React, { memo, useState, useEffect } from "react";
import "./QuesForm.css";
interface QuesFormProps {
    title: string;
    required?: boolean;
    insert_data: any;
}
const QuesForm: React.FC<QuesFormProps> = (props) => {
    const { title, required, insert_data } = props;
    const [value, setValue] = useState("Excellent");

    useEffect(() => insert_data(title, value), [insert_data, title, value]);

    return (
        <div className="question_box">
            <h4 className="question_text">
                {title}
                {required && <span style={{ color: "red" }}>*</span>}
            </h4>
            <div className="input_box">
                <div className="input_inner_box" onClick={() => setValue("Excellent")}>
                    <input type="checkbox" value="Excellent" checked={value === "Excellent"} onChange={(e: any) => setValue(e.target.value)} />
                    <label htmlFor="Excellent">Excellent</label>
                </div>
                <div className="input_inner_box" onClick={() => setValue("Good")}>
                    <input type="checkbox" value="Good" checked={value === "Good"} onChange={(e: any) => setValue(e.target.value)} />
                    <label htmlFor="Good">Good</label>
                </div>
                <div className="input_inner_box" onClick={() => setValue("Fair")}>
                    <input type="checkbox" value="Fair" checked={value === "Fair"} onChange={(e: any) => setValue(e.target.value)} />
                    <label htmlFor="Fair">Fair</label>
                </div>
                <div className="input_inner_box" onClick={() => setValue("Bad")}>
                    <input type="checkbox" value="Bad" checked={value === "Bad"} onChange={(e: any) => setValue(e.target.value)} />
                    <label htmlFor="Bad">Bad</label>
                </div>
            </div>
        </div>
    );
};

export default memo(QuesForm);
