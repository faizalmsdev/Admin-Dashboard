import React from 'react';
import Layout from "../../Layout/index"
import AddProducts from '../../Layers/AddProducts';

const index = () => {
    return (
        <div className='bg-primary overflow-x-hidden'>
            <Layout>
                <div className="m-6">
                    <AddProducts />
                </div>
            </Layout>
        </div>
    )
}

export default index
