import './App.css';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import React from "react";
import {Route, Routes} from "react-router-dom";
import UserList from "./components/user-list";
import FormUser from "./components/form-user";
function App() {
    const items = [
        {
            label: "Users",
            icon: 'pi pi-fw pi-database',
            url: '/user-list'
        },
        {
            label: "Form",
            icon: 'pi pi-fw pi-user',
            url: '/user-form'
        }
    ]
  return (
    <div className="App">
      <Menubar model={items} />
      <Routes>
          <Route path="/user-list" element={<UserList />}></Route>
          <Route path="/user-form" element={<FormUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
