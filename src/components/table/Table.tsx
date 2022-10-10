import React from "react";
import "./Table.css";

const Table = () => {
    return (
        <table>
            <tr>
                <th>checkbox</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Please rate the quality of service you received from your host.</th>
                <th>Please rate the quality of your beverage.</th>
                <th>Was our restaurant clean?</th>
                <th>Please rate your overall dining experience.</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Mar#EFE9FBPlease rate the quality of service you received from your hostia Anders</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
        </table>
    );
};

export default Table;
