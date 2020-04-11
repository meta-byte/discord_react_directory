import React from "react";
import Member from "../Member/Employee";

function MemberTable(props) {

    return (
        <tbody>
            {props.members.map(members => (
                <Member
                    id={members.id}
                    first={members.first}
                    last={members.last}
                    role={members.role}
                    email={members.email}
                />
            ))}
        </tbody>
    )
}

export default MemberTable;