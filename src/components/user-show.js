import React from "react";
import UserSlot from "./user-slot";
function UserShow({data, createData}) {
    return(
        <div>
            {
                data.map(e =>
                    <UserSlot key={e.id} data={e} createData={createData}/>
                )
            }
        </div>
    );
}
export default UserShow;