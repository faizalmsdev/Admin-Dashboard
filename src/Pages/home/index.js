import React, { useState } from 'react';
import Layout from "../../Layout/index"
import AddProducts from '../../Layers/AddProducts';
import ViewProducts from '../../Layers/ViewProducts'; 
import ReviewProducts from '../../Layers/Reviews'; 
import ManageUsers from '../../Layers/ManageUsers';

const Index = ({roles}) => {
    const [activeTab, setActiveTab] = useState('add'); // State to manage active tab

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='bg-primary overflow-x-hidden'>
            <Layout handleTabChange={handleTabChange} roles={roles}>
                <div className="my-6 ml-4">
                    {/* Conditional rendering based on activeTab */}
                    {activeTab === 'add' && <AddProducts />}
                    {activeTab === 'view' && <ViewProducts />}
                    {activeTab === 'review' && <ReviewProducts />}
                    {activeTab === 'manageUsers' && <ManageUsers />}
                </div>
            </Layout>
        </div>
    )
}

export default Index;
