import React, { Children } from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';

const index = ({children}) => {
    return (
        <>
            <Header />
            <div className='flex '>
                <div className='w-[15%]'>
                    <Footer />
                </div>
                <div className='w-[85%]'>
                    {children}
                </div>
            </div>
                
                
            
        </>
    )
}

export default index
