import React from "react";
import {connect} from 'react-redux'
import {action} from "../actions";


class Header extends React.Component{
    
    componentDidMount() {
        this.props.dispatch(action('onload'))
    }

    render() {
        const items = this.props.navItems;
        return(
            <div>
                <a href="https://neveralone.cn" className="logo">you are not alone</a>
                <div className="nav">
                    <ul>
                        {items.map((item,index)=>(
                            <li key={index}>{item}</li>
                            ))}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    navItems:state.navItems
});

Header = connect(mapStateToProps)(Header)
export default Header
