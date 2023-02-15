import React, {useState} from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FormUser from "./form-user";

function UserSlot({data, createData}) {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <h1>{data.name} - {data.age} <Button icon="pi pi-pencil" onClick={() => setVisible(true)}/></h1>
            <Dialog header="Edit your information" visible={visible} onHide={() => setVisible(false)}>
                <FormUser createData={createData}/>
            </Dialog>
        </div>
    );
}

export default UserSlot;