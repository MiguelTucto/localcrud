import React, {useState} from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FormUser from "./form-user";

function UserSlot({users, dataToEdit, setDataToEdit, editData}) {
    const [visible, setVisible] = useState(false);

    const dataTransfer = () => {
        setVisible(true);
        setDataToEdit(users);
    }
    return(
        <div>
            <h1>{users.name} - {users.age} <Button icon="pi pi-pencil" onClick={dataTransfer}/></h1>
            <Dialog header="Edit your information" visible={visible} onHide={() => setVisible(false)}>
                <FormUser dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} editData={editData} />
            </Dialog>
        </div>
    );
}

export default UserSlot;