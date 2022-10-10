import React from "react";
import ReloadIcon from "../../assets/ReloadIcon";
import SearchIcon from "../../assets/SearchIcon";
import Table from "../../components/table/Table";
import "./TablePage.css";

const TablePage = () => {
    return (
        <div className="outer_box">
            <div className="header">
                <div className="header_left">
                    <h4>Aromatic bar</h4>
                    <h6>112 records found. 3 filters applied</h6>
                </div>
                <div className="header_right">
                    <input type="text" placeholder="search..." />
                    <SearchIcon />
                    <button className="icon_button">
                        <ReloadIcon />
                    </button>
                    <button className="new_button">Add new</button>
                </div>
            </div>
            <div className="content_box">
                <Table />
            </div>
            <div className="footer">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default TablePage;
