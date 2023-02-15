import React from "react";
function UserSlot({e}) {
    return(
        <div>
            <h1>{e.name} - {e.age}</h1>
        </div>
    );
}

export default UserSlot;