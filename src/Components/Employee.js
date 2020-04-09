import React from "react";

function Employee(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.role}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default Employee;
