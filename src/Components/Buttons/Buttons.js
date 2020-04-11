// button class="btn waves-effect waves-light" type="submit" name="action">Submit
//     <i class="material-icons right">send</i>
//   </button>

import React from "react";

function Buttons(props) {
    return (
        <div className="Row">
            <button className="btn waves-effect waves-light">First</button>
            <button className="btn waves-effect waves-light">Last</button>
            <button className="btn waves-effect waves-light">Members</button>
        </div>
    )
}

export default Buttons