import React from "react";

function Buttons(props) {

    return (
        <div className="Row">
            <button className="btn waves-effect waves-light sort-first">First</button>
            <button className="btn waves-effect waves-light sort-last">Last</button>
            <button className="btn waves-effect waves-light filter-members" onClick={props.filterMembers}>Members</button>
        </div>
    )
}

export default Buttons