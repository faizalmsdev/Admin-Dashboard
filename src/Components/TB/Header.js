import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div className='header bg-secondary'>
            
            <div className="footer-middle">
                <h1 className='font-semibold text-primary'>The karaikudi Kitchen</h1>
            </div>
            <div className="footer-right">
                <input type='search' placeholder='Search'/>
            </div>
        </div>
    )
}

export default Header
