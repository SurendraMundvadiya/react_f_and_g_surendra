import React from "react";
import "./TextField.css";
interface TextFieldProps {
    title?: string;
    required?: boolean;
}
const TextField: React.FC<TextFieldProps> = (props) => {
    const { title, required } = props;
    return (
        <div className="question_box">
            <h4>
                {title}
                {required && <span style={{ color: "red" }}>*</span>}
            </h4>
            <div className="input_box">
                <input type="text" />
            </div>
        </div>
    );
};

export default TextField;
