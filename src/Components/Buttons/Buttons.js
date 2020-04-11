import React from "react";

function Buttons(props) {

    return (
        <div className="Row">
            <button className="btn waves-effect waves-light sort-first" onClick={props.sortFirst}>First</button>
            <button className="btn waves-effect waves-light sort-last" onClick={props.sortLast}>Last</button>
            <button className="btn waves-effect waves-light filter-members" onClick={props.filterMembers}>Members</button>
            <button className="btn red darken-2 waves-effect waves-light filter-members" onClick={props.defaultState}>Reset</button>
        </div>
    )
}

export default Buttons