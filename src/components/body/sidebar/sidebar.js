import React from "react";
import './sidebar.scss'


import TagComponent from "./tagComponent/tag";
import {BackTop} from "antd";


let SlideBar =()=>(
    <div className="sidebarContainer">
        <TagComponent/>
        <BackTop />
    </div>
)
export default SlideBar