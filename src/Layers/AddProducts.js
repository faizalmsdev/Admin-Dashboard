import React, { useState } from 'react';
import Container from "../Layout/Container";
import { Form, Input, Button, Radio, Select, Upload, message, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddProducts = () => {
    const [form] = Form.useForm();
    const [showDiscountPrice, setShowDiscountPrice] = useState(false);

    const onFinish = async (values) => {
        try {
            const formData = new FormData();
            formData.append('dish_name', values.dish_name);
            formData.append('price', values.price);
            formData.append('description', values.description);
            formData.append('vg_category', values.vg_category);
            formData.append('category', values.category);
            formData.append('discountAvailable', values.discountAvailable);
            if (values.discountAvailable) {
                formData.append('discountPrice', values.discountPrice);
            }
            
            // Check if images is an array
            if (Array.isArray(values.images)) {
                // If images is an array, iterate over each image and append it
                values.images.forEach((image) => {
                    formData.append('images', image.originFileObj);
                });
            } else {
                // If images is a single file object, append it directly
                formData.append('images', values.images.originFileObj);
            }
    
            // Send formData to backend
            const response = await fetch('https://karaikudi-kitchen-backend.onrender.com/api/v1/menu', {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Failed to upload data');
            }
    
            const responseData = await response.json();
            console.log('Response:', responseData);
            message.success('Data uploaded successfully');
        } catch (error) {
            console.error('Error:', error.message);
            message.error('Failed to upload data');
        }
    };
    



    return (
        <div className=''>
            <Container>
                <div className='w-[80%] ml-5'>
                    <h1 className='text-text font-semibold  text-4xl'>Welcome chief!</h1>
                    <div className='m-6 mt-12 font-medium text-text '>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                        >
                        <div className='flex justify-around'>
                            <div>
                                <Form.Item
                                    label="Dish Name"
                                    name="dish_name"
                                    rules={[
                                        { required: true, message: 'Please input the dish name!' },
                                        { max: 30, message: 'A Menu must have less or equal than 30 characters' },
                                        { min: 3, message: 'A Menu must have greater or equal than 3 characters' }
                                    ]}
                                >
                                    <Input placeholder="Input dish name" style={{ width: '250px' , borderRadius: '5px' , marginLeft : "2rem" } } />
                                </Form.Item>
                                <Form.Item
                                    label="Price"
                                    name="price"
                                    rules={[
                                        { required: true, message: 'Please input the price!' }
                                    ]}
                                >
                                    <Input type="number" placeholder="Input price" style={{ width: '250px' , borderRadius: '5px' , marginLeft : "2rem" } } />
                                </Form.Item>
                                <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[
                                        { required: true, message: 'Please input the description!' }
                                    ]}
                                >
                                    <Input.TextArea rows={3} placeholder="Input description" style={{ width: '350px' , borderRadius: '5px' , marginLeft : "2rem" } } />
                                </Form.Item>
                                <Form.Item
                                    label="VG Category"
                                    name="vg_category"
                                    rules={[
                                        { required: true, message: 'Please select the VG category!' }
                                    ]}
                                >
                                    <Radio.Group>
                                        <Radio value="veg">Veg</Radio>
                                        <Radio value="non-veg">Non-Veg</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item
                                    label="Category"
                                    name="category"
                                    rules={[
                                        { required: true, message: 'Please select the category!' }
                                    ]}
                                >
                                    <Select placeholder="Select category" style={{ width: '250px' , borderRadius: '5px' , marginLeft : "2rem" } }>
                                        <Option value="popular-choice">Popular Choice</Option>
                                        <Option value="people-favorite">People Favorite</Option>
                                        <Option value="high-selling">High Selling</Option>
                                        <Option value="others">Others</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label=""
                                    name="discountAvailable"
                                    valuePropName="checked"
                                >
                                    <Checkbox onChange={(e) => setShowDiscountPrice(e.target.checked)}>
                                        Check if discount price available
                                    </Checkbox>
                                </Form.Item>
                                {showDiscountPrice && (
                                    <Form.Item
                                        label="Discount Price"
                                        name="discountPrice"
                                        rules={[
                                            { required: true, message: 'Please input the discount price!' }
                                        ]}
                                    >
                                        <Input type="number" placeholder="Input discount price" style={{ width: '250px' , borderRadius: '5px' , marginLeft : "2rem" } } />
                                    </Form.Item>
                                )}
                                <Form.Item
                                    label="Images"
                                    name="images"
                                    valuePropName="fileList"
                                    getValueFromEvent={(e) => {
                                        if (Array.isArray(e)) {
                                            return e;
                                        }
                                        return e && e.fileList;
                                    }}
                                    rules={[
                                        { required: false, message: 'Please upload images!' }
                                    ]}
                                >
                                    <Upload  multiple={true} >
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </Upload>
                                </Form.Item>
                            </div>
                        </div>
                           
                            
                            <Form.Item >
                                <Button  htmlType="submit" className='bg-text text-zinc-300 font-semibold'>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddProducts;
