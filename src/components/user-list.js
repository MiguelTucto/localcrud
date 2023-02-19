import React, {useState} from "react";
import UserShow from "./user-show";
import { Button } from 'primereact/button';
import FormUser from "./form-user";
import { Dialog } from 'primereact/dialog';
import {Form} from "react-router-dom";

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
    const [dataToEdit, setDataToEdit] = useState(null);
    const [visible, setVisible] = useState(false);

    const createData = (data) => {
        data.id = Date.now();
        setUsers([...users, data]);
    };

    const editData = (data) => {
        let newData = users.map(e => e.id === data.id ? data : e );
        setUsers(newData);
    };

    const deleteData = (data) => {

    };
    return(
        <div>
            <Button icon="pi pi-plus" onClick={() => setVisible(true)}/>
            <UserShow users={users} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} editData={editData} />
            <Dialog onHide={() => setVisible(false)} visible={visible} header="Put your information">
                <FormUser createData={createData} />
            </Dialog>
        </div>
    );
}
export default UserList;