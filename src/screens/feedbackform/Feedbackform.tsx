import React, { memo, useState } from "react";
import "./Feedbackform.css";
import QuesForm from "./radio_ques/QuesForm";
import TextField from "./input_ques/TextField";
import { useNavigate } from "react-router-dom";
import { validation } from "../../components/utils/validation";
import { generateString } from "../../components/utils/generateString";

var obj: any = {
    id: "",
    "Customer Name": "",
    Email: "",
    Phone: "",
    "Please rate the quality of the service you received from your host.": "",
    "Please rate the quality of your beverage.": "",
    "Was our restaurant clean?": "",
    "Please rate your overall dining experience.": "",
    created_at: "",
};
const Feedbackform: React.FC = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState({ key: "", msg: "" });

    const insert_data = (key: string, value: any) => {
        obj = { ...obj, [key]: value };
        // obj[key] = value;
        // setObj({ ...temp });
    };

    const save_datafc = () => {
        const err = validation(obj);
        if (err) {
            setErr(err);
        } else {
            obj.id = generateString(8);
            obj.created_at = new Date().toISOString();
            const temp = [obj];
            const myData = localStorage.getItem("myDataStorage");
            if (myData) temp.push(...JSON.parse(myData));
            localStorage.setItem("myDataStorage", JSON.stringify(temp));
            obj = {
                id: "",
                "Customer Name": "",
                Email: "",
                Phone: "",
                "Please rate the quality of the service you received from your host.": "",
                "Please rate the quality of your beverage.": "",
                "Was our restaurant clean?": "",
                "Please rate your overall dining experience.": "",
                created_at: "",
            };
            navigate("/thanks_page");
        }
    };

    return (
        <div className="outer_box">
            <div className="header">
                <h2 className="main_title">Aromatic bar</h2>
            </div>
            <div className="content_box">
                <div className="content_inner_box">
                    <TextField required title={"Customer Name"} insert_data={insert_data} err={err} />
                    <TextField required title={"Email"} insert_data={insert_data} err={err} />
                    <TextField required title={"Phone"} insert_data={insert_data} err={err} />
                </div>
                <div className="content_inner_box">
                    <QuesForm required title={"Please rate the quality of the service you received from your host."} insert_data={insert_data} />
                    <QuesForm required title={"Please rate the quality of your beverage."} insert_data={insert_data} />
                    <QuesForm required title={"Was our restaurant clean?"} insert_data={insert_data} />
                    <QuesForm required title={"Please rate your overall dining experience."} insert_data={insert_data} />
                </div>
            </div>
            <div className="footer">
                <button onClick={save_datafc}>Submit Review</button>
            </div>
        </div>
    );
};

export default memo(Feedbackform);
