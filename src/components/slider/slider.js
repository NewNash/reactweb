import React from 'react';
import { Carousel } from 'antd';
import './slide.scss'
import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'
import img4 from '../../static/img/4.jpg'


let Slider = ()=>(
    <Carousel >
        <div>
            <h3><img src={img1} alt=""/></h3>
        </div>
        <div>
            <h3><img src={img2} alt=""/></h3>
        </div>
        <div>
            <h3><img src={img3} alt=""/></h3>
        </div>
        <div>
            <h3><img src={img4} alt=""/></h3>
        </div>
    </Carousel>
)
export default Slider