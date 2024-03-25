import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({ handleTabChange , roles }) => {
    return (
        <div className='footer h-[96vh]  w-full bg-secondary'>
            <div className="element text-primary">
                <Link href='' onClick={() => handleTabChange('view')}>View Products</Link>
            </div>
            <div className="element text-primary">
                <Link href='' onClick={() => handleTabChange('add')}>Add Product</Link>
            </div>
            <div className="element text-primary">
                <Link href='' onClick={() => handleTabChange('review')}>Reviews</Link>
            </div>
            {roles === 'itsadmin' ? (
                <div className="element text-primary">
                <Link href='' onClick={() => handleTabChange('manageUsers')}>Manage Users</Link>
            </div>
            ) : (<></>)}
        </div>
    )
}

export default Footer;
