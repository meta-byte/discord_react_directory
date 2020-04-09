import React, { Component } from "react";
import Employee from "./Employee";
import employees from "../employees.json"

class EmployeeTable extends Component {
    render() {
        return (
            <div className="container white-text">
                <table className="highlight purple darken-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Role</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employees => (
                            <Employee
                                id={employees.id}
                                first={employees.first}
                                last={employees.last}
                                role={employees.role}
                                email={employees.email}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;