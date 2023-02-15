import React from "react";
import UserSlot from "./user-slot";
function UserShow({data}) {
    return(
        <div>
            {
                data.map(e =>
                    <UserSlot key={e.id} e={e}/>
                )
            }
        </div>
    );
}
export default UserShow;