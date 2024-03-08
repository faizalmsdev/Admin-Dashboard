import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({ handleTabChange }) => {
    return (
        <div className='footer h-[96vh]  w-full bg-secondary'>
            <div className="element text-primary">
                {/* onClick handlers to change active tab */}
                <Link href='' onClick={() => handleTabChange('view')}>View Products</Link>
            </div>
            <div className="element text-primary">
                <Link href='' onClick={() => handleTabChange('add')}>Add Product</Link>
            </div>
            {/* Other tab elements */}
            <div className="element text-primary">
                <Link href='' onClick={() => handleTabChange('review')}>Reviews</Link>
            </div>
        </div>
    )
}

export default Footer;
