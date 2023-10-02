import React from "react";
import "./App.css";
import Main from "./Pages/Main";
import MessageWindow from "./Pages/MessageWindow";
import Sidebar from "./Component/SideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import Users from "./Pages/Users";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/message" element={<MessageWindow />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
