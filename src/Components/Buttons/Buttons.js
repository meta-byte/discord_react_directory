import React from "react";

function Buttons(props) {

    return (
        <div className="row ">
            <div className="col s6 left-align">
                <button className="btn blue-grey waves-effect waves-light sort-first" onClick={props.sortFirst}>First</button>
                <button className="btn blue-grey waves-effect waves-light sort-last" onClick={props.sortLast}>Last</button>
            </div>
            <div className="col s6 right-align">
                <button className="btn amber accent-4 waves-effect waves-light filter-members" onClick={props.filterMembers}>Members</button>
                <button className="btn red darken-2 waves-effect waves-light filter-members" onClick={props.defaultState}>Reset</button>
            </div>
        </div>
    )
}

export default Buttons