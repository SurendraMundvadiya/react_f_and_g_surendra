import React, { memo, useEffect, useState } from "react";
import ReloadIcon from "../../assets/ReloadIcon";
import SearchIcon from "../../assets/SearchIcon";
import Table from "../../components/table/Table";
import "./TablePage.css";
import { useNavigate } from "react-router-dom";
const TablePage: React.FC = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState<any[]>();
    const [filtered, setFiltered] = useState<string[]>([]);
    const myData = localStorage.getItem("myDataStorage");
    const intial_state = () => {
        const temp = [];
        if (myData) {
            temp.push(...JSON.parse(myData));
            setTableData([...temp]);
        }
    };

    useEffect(() => {
        intial_state();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const get_selected_list = (arr: string[]) => {
        setFiltered(arr);
    };

    const delete_selected = () => {
        const temp: any[] = [];
        tableData?.forEach((el: any) => !filtered.includes(el.id) && temp.push(el));
        localStorage.setItem("myDataStorage", JSON.stringify(temp));
        setTableData([...temp]);
    };
    const search = (e: { target: { value: string } }) => {
        const search_text = e.target.value?.trim().toLowerCase();
        if (search_text && search_text.length > 0 && myData) {
            const temp = JSON.parse(myData)?.filter((el: any) => el["Customer Name"]?.toLowerCase().includes(search_text));
            if (temp) setTableData([...temp]);
            else setTableData([]);
        } else {
            intial_state();
        }
    };

    return (
        <div className="outer_box">
            <div className="table_header">
                <div className="header_left">
                    <h4>Aromatic bar</h4>
                    <h6>
                        {tableData?.length} records found. {filtered?.length} filters applied
                    </h6>
                </div>
                <div className="header_right">
                    <input type="text" placeholder="search..." onChange={search} />
                    <SearchIcon />
                    <button className="icon_button" onClick={intial_state}>
                        <ReloadIcon />
                    </button>
                    <button className="new_button" onClick={() => navigate("/feedback_form")}>
                        Add new
                    </button>
                </div>
            </div>
            <div className="content_box">
                <Table data={tableData} get_selected_list={get_selected_list} />
            </div>
            <div className="footer">
                <button onClick={delete_selected}>Delete({filtered.length})</button>
            </div>
        </div>
    );
};

export default memo(TablePage);
