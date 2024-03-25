import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './login.css';
import { message } from 'antd';
const Login = ({onLogin  , setUserEmail , setUserName , setRoles}) => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [senderName, setSenderName] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const [activeForm, setActiveForm] = useState('sign-in'); // Initial state set to 'sign-in'
    const sendEmail = () => {
        const templateParams = {
            to_email: 'faisal2002530@gmail.com',
            to_name: 'Admin',
            from_name: senderName,
            subject: 'Enquiry',
            message: `Email: ${email}, Mobile: ${mobile}\n\nEnquiry: ${enquiry}`
        };
    
        emailjs.send('service_uwg2gzp', 'template_0ryggxb', templateParams, 'idZyrgrMHg_dwcPs-')
            .then((response) => {
                setEmail('');
                setMobile('');
                setSenderName('');
                setEnquiry('');
            }, (error) => {
                console.error('Email sending failed:', error);
            });
    };
    const [password, setPassword] = useState('');
    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch('http://localhost:3000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
    
            if (response.ok) {
                const data = await response.json();
                onLogin();
                setRoles(data.roles[0]);
                setUserName(data.name);
                setUserEmail(data.email);
                message.success('Welcome to the admin panel!');
            } else {
                const errorData = await response.json();
                message.error(errorData.message || 'User not found'); // Displaying error message from response or default message
            }
        } catch (error) {
            console.error('Error:', error);
            message.error('An error occurred while signing in. Please try again later.');
        }
    };

    const handleContactUsClick = () => {
        if (email && mobile && senderName && enquiry) {
            sendEmail();
        } else {
            alert('Please enter your email, mobile number, name, and enquiry.');
        }
    };

    const toggleForm = (formType) => {
        setActiveForm(formType);
    };

    return (
        <div className='bodyy'>
            <div className="container" id="container">
                <div className="toggle-container">
                    <div className="toggle">
                        {activeForm === 'contact' && (
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>If you want to contact our support team for forgetting password / needs to create ( or ) update site just contact us.</p>
                                <button onClick={() => toggleForm('sign-in')}>Sign In</button>
                            </div>
                        )}
                        {activeForm === 'sign-in' && (
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Login with your personal credentials which was given by developer to use your site dashboard features</p>
                                <p>If you don't have one / Forget Your credentials just Contact us </p>
                                <button onClick={() => toggleForm('contact')}>Contact Us</button>
                            </div>
                        )}
                    </div>
                </div>
                {activeForm === 'sign-in' && (
                    <div className="form-container sign-in">
                        <form>
                            <h1 className='text-3xl font-bold mb-2'>Sign In</h1>
                            <span className='mb-2'>By Using your Registered Email ID & Password</span>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button onClick={handleSignIn}>Sign In</button>
                        </form>
                    </div>
                )}
                {activeForm === 'contact' && (
                    <div className="form-container sign-in">
                        <form>
                            <h1 className='text-3xl font-bold mb-2'>Contact Us</h1>
                            <span className='mb-2'>By Providing Your Details</span>
                            <input type="text" placeholder="Your Name" value={senderName} onChange={(e) => setSenderName(e.target.value)} />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            <input placeholder="Type your enquiry here" value={enquiry} onChange={(e) => setEnquiry(e.target.value)}></input>
                            <button type="button" className='' onClick={handleContactUsClick}>Contact us</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
