import React, { useState } from 'react';
import Layout from "../../Layout/index"
import AddProducts from '../../Layers/AddProducts';
import ViewProducts from '../../Layers/ViewProducts'; // Import ViewProducts component
import ReviewProducts from '../../Layers/Reviews'; // Import ViewProducts component


const Index = () => {
    const [activeTab, setActiveTab] = useState('add'); // State to manage active tab

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='bg-primary overflow-x-hidden'>
            <Layout handleTabChange={handleTabChange}>
                <div className="my-6 ml-4">
                    {/* Conditional rendering based on activeTab */}
                    {activeTab === 'add' && <AddProducts />}
                    {activeTab === 'view' && <ViewProducts />}
                    {activeTab === 'review' && <ReviewProducts />}
                </div>
            </Layout>
        </div>
    )
}

export default Index;
