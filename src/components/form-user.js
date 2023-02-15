import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button";

const initialForm = {
    id: null,
    name: "",
    age: null,
};
function FormUser({createData}) {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.age) {
            alert("Complete fields");
            return;
        }

        if(form.id === null){
            createData(form);
        }

        handleReset();

    };

    const handleReset = (e) => {
        setForm(initialForm);
    };
    return(
        <div>
            <h1>FormUser works!</h1>
            <form onSubmit={handleSubmit}>
                <InputText name="name"
                           value={form.name}
                           type="text"
                           placeholder="Name"
                           onChange={handleChange}
                />
                <InputText name="age"
                           value={form.age}
                           type="number"
                           placeholder="Age"
                           onChange={handleChange}
                />
                <Button label="Submit"/>
            </form>
        </div>
    );
}
export default FormUser;