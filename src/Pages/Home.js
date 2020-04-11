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
        this.setState({ members: members })
    }

    filterMembers = () => {
        var memberRole = members.filter(function (member) {
            return member.role === "Member";
        })
        // console.log("It works")
        this.setState({ members: memberRole });
    }

    render() {

        return (
            <Wrapper>
                <Header />
                <Buttons
                    filterMembers={this.filterMembers}
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