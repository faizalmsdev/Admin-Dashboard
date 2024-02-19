import React, { Children } from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';

const index = ({children , handleTabChange}) => {
    return (
        <>
            <Header />
            <div className='flex '>
                <div className='w-[15%]'>
                    <Footer handleTabChange={handleTabChange} />
                </div>
                <div className='w-[85%]'>
                    {children}
                </div>
            </div>
                
                
            
        </>
    )
}

export default index
