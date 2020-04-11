import React from "react";
import Employee from "../Employee/Employee";

function EmployeeTable(props) {

    return (
        <tbody>
            {props.employees.map(employees => (
                <Employee
                    id={employees.id}
                    first={employees.first}
                    last={employees.last}
                    role={employees.role}
                    email={employees.email}
                />
            ))}
        </tbody>
    )
}

export default EmployeeTable;