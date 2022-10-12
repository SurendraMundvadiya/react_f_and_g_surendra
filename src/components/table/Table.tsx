import React, { useEffect, useState } from "react";
import "./Table.css";
interface TableProps {
    data: any;
    get_selected_list?: any;
}
const Table: React.FC<TableProps> = (props) => {
    const { data, get_selected_list } = props;
    const [tableHeader, setTableHeader] = useState<string[]>([]);
    const [tableData, setTableData] = useState<any[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    useEffect(() => {
        if (data) {
            setTableHeader([...Object.keys(data[0])]);
            setTableData(data);
        }
    }, [data]);

    const update_selected_list = (key: string) => {
        const index = selected?.findIndex((el) => el === key);
        if (index === -1) setSelected((selected: any) => [...selected, key]);
        else setSelected((selected: any) => [...selected.slice(0, index), ...selected.slice(index + 1)]);
    };
    useEffect(() => {
        get_selected_list(selected);
    }, [get_selected_list, selected]);
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            className="table_checkbox"
                            checked={selected.length === tableData.length}
                            onChange={() => {
                                if (selected.length === tableData.length) setSelected([]);
                                else setSelected([...tableData.map((el) => el.id)]);
                            }}
                        />
                    </th>
                    {tableHeader?.map((el: string) => (
                        <th key={el}>{el}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData?.map((el: any, i: number) => (
                    <tr key={i}>
                        <td>
                            <input type="checkbox" checked={Boolean(selected.find((it) => it === el.id))} onChange={() => update_selected_list(el.id)} />
                        </td>
                        {tableHeader?.map((h: string) => (
                            <td key={h}>{el[h]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
