import React, {useState} from "react";
import UserShow from "./user-show";

const dbUsers = [
    {
        id: 1,
        name: "Miguel",
        age: 24
    },
    {
        id: 2,
        name: "Angel",
        age: 20
    },
    {
        id: 3,
        name: "Ernesto",
        age: 30
    }
];
function UserList(){
    const [users, setUsers] = useState(dbUsers);

    return(
        <div>
            <UserShow data={users} />
        </div>
    );
}
export default UserList;