import React from "react";
import {connect} from 'react-redux'
// import {action} from "../actions";
import './header.scss'

class Header extends React.Component {
    componentDidMount() {
        this.props.handleOnload()
    }

    render() {
        const items = this.props.navItems;
        return (
            <div className="headerContainer">
                <div className="headerBox">
                    <a href="https://neveralone.cn" className="logo">you are not alone</a>
                    <div className="nav">
                        <ul className="navUl">
                            {items.map(item => (
                                <li key={item._id}
                                    className={this.props.navActive===item.name ?"navItem active":"navItem"}
                                    onMouseOver={()=>this.props.handleMouseOver(item.name)}
                                    onMouseOut={this.props.handleMouseLeave}>
                                    <a href="./">{item.name}</a>
                                    <div className="subNav">
                                        <ul className="subNavUl">
                                            {item.subCategory.map((subItem) => (
                                                <li key={subItem._id} className="subNavItem">
                                                    <a href="./">
                                                        {subItem.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navItems: state.navItems,
    navActive: state.navActive
});
const mapDispatchToProps = dispacth => ({
    handleOnload: () => dispacth({type: 'getNavItemsAsync'}),
    handleMouseOver: (name) => dispacth({type: 'navMouseover',activeItem:name}),
    handleMouseLeave:()=>dispacth({type:'navMouseOut'})
})
Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header
