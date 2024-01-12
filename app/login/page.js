"use client"
import React, { useState } from 'react';


const LoginPage = () => {
    const [secretKey, setSecretKey] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const branches = ['Branch 1', 'Branch 2', 'Branch 3', 'Branch 4']; // Add your branch names here

    const handleLogin = () => {
        // Add your login logic here
        console.log('Secret Key:', secretKey);
        console.log('Selected Branch:', selectedBranch);
        // Add logic to navigate to the dashboard if credentials match
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='mb-8'> {/* Add margin-bottom for the logo */}
                {/* Your logo component or image goes here */}
                <img src="/path/to/your/logo.png" alt="Logo" className="h-16 w-auto" />
            </div>
            <div className='flex flex-col items-center space-y-4'>
                <input
                    type='text'
                    placeholder='Secret Key'
                    className='border p-2 rounded'
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                />
                <select
                    className='border p-2 rounded'
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                >
                    <option value='' disabled>Select Branch</option>
                    {branches.map((branch, index) => (
                        <option key={index} value={branch}>{branch}</option>
                    ))}
                </select>
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
