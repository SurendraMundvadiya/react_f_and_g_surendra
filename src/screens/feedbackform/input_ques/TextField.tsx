import React, { memo, useEffect, useState } from "react";
import ErrorIcon from "../../../assets/ErrorIcon";
import "./TextField.css";
interface TextFieldProps {
    title: string;
    required?: boolean;
    insert_data: any;
    err?: any;
}
const TextField: React.FC<TextFieldProps> = (props) => {
    const { title, required, insert_data, err } = props;
    const [type, setType] = useState("text");
    const [placeHolder, setPlaceHolder] = useState("");
    useEffect(() => {
        if (title === "Email") {
            setType("email");
            setPlaceHolder("E.g. abc@gmail.com");
        } else if (title === "Phone") {
            setType("number");
            setPlaceHolder("0000000000");
        } else {
            setType("text");
            setPlaceHolder("E.g. jon snow");
        }
    }, [title]);
    return (
        <div className="question_box">
            <h4 className="question_text">
                {title}
                {required && <span style={{ color: "red" }}>*</span>}
            </h4>
            <div className="input_box">
                <input type={type} onChange={(e: any) => insert_data(title, e.target.value)} placeholder={placeHolder} />
            </div>
            {err.key === title && (
                <span className="error_msg">
                    <ErrorIcon />
                    {"  "} {err.msg}
                </span>
            )}
        </div>
    );
};

export default memo(TextField);
