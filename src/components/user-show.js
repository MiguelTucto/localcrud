import React from "react";
import UserSlot from "./user-slot";
function UserShow({users, dataToEdit, setDataToEdit, editData}) {
    return(
        <div>
            {
                users.map(e =>
                    <UserSlot key={e.id} users={e} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} editData={editData} />
                )
            }
        </div>
    );
}
export default UserShow;