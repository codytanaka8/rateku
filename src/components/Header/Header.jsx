import React from 'react'
import './Header.css'
import logo1 from '../../assets/logo8.png';


function Header() {
    return (
        <div className="header-main">
            
            <div className="header-logo">
                <img src={logo1}/>
            </div>
            
            <div className="header-search"><input type="text" placeholder="Search topic or interests"/></div>
                <ul className="header-menus">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Profile</li>
                </ul>
            
        </div>
    )
}

export default Header
