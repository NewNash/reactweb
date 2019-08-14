import React from 'react'
import 'antd/dist/antd.css';
import '../static/css/reset.css'
import Header from "./header/header";

import Slider from "./slider/slider";
import Body from "./body/body";
let App = ()=>(
    <div>
        <Header />
        <Slider/>
        <Body/>
    </div>
)


export default App