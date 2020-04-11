import React, { Component } from 'react';
import EmployeeTable from "../Components/EmployeeTable/EmployeeTable"
import Header from "../Components/Header/Header";
import Wrapper from "../Components/Wrapper";
import Buttons from "../Components/Buttons/Buttons";
import employees from "../employees.json"


class Home extends Component {
    state = {
        employees: employees
    }


    render() {
        return (
            <Wrapper>
                <Header />
                <Buttons />
                <div className="white-text">
                    <table className="highlight centered purple darken-3">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Role</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <EmployeeTable
                            employees={this.state.employees}
                        />
                    </table>
                </div>
            </Wrapper >
        )
    }
}

export default Home;