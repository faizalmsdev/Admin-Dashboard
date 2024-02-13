import React, { Children } from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';

const index = ({children}) => {
    return (
        <div>
            <Header />
            <div className='flex '>
                <div className=''>
                    <Footer />
                </div>
                <div className=''>
                    {children}
                </div>
            </div>
                
                
            
        </div>
    )
}

export default index
