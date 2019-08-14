import React from "react";
import SideBar from "./sidebar/sidebar";
import Main from "./main/main";
import './body.scss'

let Body= ()=>(
    <div className="bodyContainer">
        <Main/>
        <SideBar/>
    </div>
)
export default Body