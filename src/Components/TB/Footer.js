import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer h-[96vh]  w-[10rem]'>
           <div className="element">
            <a href=''>View Products</a>
           </div>
           <div className="element">
            <a href=''>Add Product</a>
           </div>
           <div className="element">
            <a href=''>Reviews</a>
           </div>
           <div className="element">
            <a href=''>Update Products</a>
           </div>
           <div className="element">
            <a href=''>Delete Product</a>
           </div>
        </div>
    )
}

export default Footer
