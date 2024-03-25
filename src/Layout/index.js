import React, { Children } from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';

const index = ({children , handleTabChange , roles}) => {
    return (
        <>
            <Header />
            <div className='flex '>
                <div className='w-[13%]'>
                    <Footer handleTabChange={handleTabChange} roles={roles} />
                </div>
                <div className='w-[87%]'>
                    {children}
                </div>
            </div>
                
                
            
        </>
    )
}

export default index
