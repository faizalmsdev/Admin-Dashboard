import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="footer-left">
                <h4></h4>
            </div>
            <div className="footer-middle">
                <h1>The karaikudi Kitchen</h1>
            </div>
            <div className="footer-right">
                <input type='search' placeholder='Search'/>
            </div>
        </div>
    )
}

export default Header
