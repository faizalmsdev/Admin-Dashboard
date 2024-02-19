import React from 'react';
import './Footer.css';

const Footer = ({ handleTabChange }) => {
    return (
        <div className='footer h-[96vh]  w-[10rem] bg-secondary'>
            <div className="element text-primary">
                {/* onClick handlers to change active tab */}
                <a href='#' onClick={() => handleTabChange('view')}>View Products</a>
            </div>
            <div className="element text-primary">
                <a href='#' onClick={() => handleTabChange('add')}>Add Product</a>
            </div>
            {/* Other tab elements */}
        </div>
    )
}

export default Footer;
