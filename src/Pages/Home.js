import React, { Component } from 'react';
import EmployeeTable from "../Components/MemberTable/MemberTable"
import Header from "../Components/Header/Header";
import Wrapper from "../Components/Wrapper";
import Buttons from "../Components/Buttons/Buttons";
import members from "../Members.json"


class Home extends Component {

    state = {
        members: members
    }

    defaultState = () => {
        var defaultMembers = members
        defaultMembers.sort(function (a, b) {
            if (a.id < b.id) { return -1; }
            if (a.id > b.id) { return 1; }
            return 0;
        })
        this.setState({ members: defaultMembers })
    }

    filterMembers = () => {
        var memberRole = members.filter(member => member.role === "Member")
        this.setState({ members: memberRole });
    }

    sortFirst = () => {
        var firstMembers = this.state.members
        firstMembers.sort(function (a, b) {
            if (a.first < b.first) { return -1; }
            if (a.first > b.first) { return 1; }
            return 0;
        })
        console.log(firstMembers)
        this.setState({ employees: firstMembers });
    }
    sortLast = () => {
        var lastMembers = this.state.members
        lastMembers.sort(function (a, b) {
            if (a.last < b.last) { return -1; }
            if (a.last > b.last) { return 1; }
            return 0;
        })
        console.log(lastMembers)
        this.setState({ employees: lastMembers });
    }


    render() {

        return (
            <Wrapper>
                <Header />
                <Buttons
                    defaultState={this.defaultState}
                    filterMembers={this.filterMembers}
                    sortFirst={this.sortFirst}
                    sortLast={this.sortLast}
                />
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
                            members={this.state.members}
                        />
                    </table>
                </div>
            </Wrapper >
        )
    }
}
export default Home;