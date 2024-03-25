import React, { useState } from 'react';
import { Input, Button, message } from 'antd';

const ManageUsers = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: '',
    roles: ['user']
  });

  const handleInputChange = (key, value) => {
    setUserData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleSubmit = () => {
    fetch(process.env.REACT_APP_API_URL +  process.env.REACT_APP_API_USERS, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        message.success('User created successfully', 2);
        setUserData({
          email: '',
          password: '',
          name: '',
          roles: ['user']
        });
      } else {
        throw new Error('Failed to create user');
      }
    })
    .catch(error => {
      message.error(error.message, 2);
    });
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className='mx-10 flex flex-col gap-5 bg-gray-400 p-12'>
        <h1 className='items-center justify-center text-center font-bold text-3xl'>Create User</h1>
        <Input
          placeholder="Email"
          value={userData.email}
          onChange={e => handleInputChange('email', e.target.value)}
        />
        <Input.Password
          placeholder="Password"
          value={userData.password}
          onChange={e => handleInputChange('password', e.target.value)}
        />
        <Input
          placeholder="Name"
          value={userData.name}
          onChange={e => handleInputChange('name', e.target.value)}
        />
        <Input
          placeholder="Roles"
          value={userData.roles.join(',')}
          onChange={e => handleInputChange('roles', e.target.value.split(','))}
        />
        <Button type="primary"  onClick={handleSubmit} className='mx-[40%] mt-8 bg-black font-semibold'>
          Create User
        </Button>
      </div>
      {/* <div className='mx-10 flex flex-col gap-5 bg-gray-400 p-12'>
        <h1 className='items-center justify-center text-center font-bold text-3xl'>Manage User</h1>
        <Input
          placeholder="Email"
          value={userData.email}
          onChange={e => handleInputChange('email', e.target.value)}
        />
        <Input.Password
          placeholder="Password"
          value={userData.password}
          onChange={e => handleInputChange('password', e.target.value)}
        />
        <Input
          placeholder="Name"
          value={userData.name}
          onChange={e => handleInputChange('name', e.target.value)}
        />
        <Input
          placeholder="Roles"
          value={userData.roles.join(',')}
          onChange={e => handleInputChange('roles', e.target.value.split(','))}
        />
        <Button type="primary"  onClick={handleSubmit} className='mx-[40%] mt-8 bg-black font-semibold'>
          Create User
        </Button>
      </div> */}
    </div>
  );
};

export default ManageUsers;
