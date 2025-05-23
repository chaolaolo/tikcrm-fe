import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Divider from '../../core/Divider/Divider';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className='text-center mt-5 mb-5'>
        <h2 className='text-2xl'>Login to TikCRM Management</h2>
      </div>
      <div className='card'>
        <div className='card-body'>
          <div className='m-sm-4'>
            {/* <div className="w-110 p-12 bg-white rounded-lg shadow-md"> */}
              <form>
                <div className="mb-2 flex flex-col">
                  <p className="!mb-1 !p-0 text-left text-sm text-gray-500">Email</p>
                  <input
                    type="email"
                    placeholder="Email"
                    value={password}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-0 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-2 flex flex-col">
                  <p className="!mb-1 !p-0 text-left text-sm text-gray-500">Password</p>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-0 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className='mt-2 mb-1'>
                  <Button
                    className='btn btn-primary pl-3 pr-3'
                    type='primary'
                    // onClick={handleLogin}
                    htmlType='submit'
                    // loading={isLoading}
                    style={{ height: '38px', width: '100%' }}>
                    Login
                  </Button>
                </div>
              </form>
              <Link to='/forgot-password' className='text-left'>
                Forgot
              </Link>
              <Divider text={('OR')} />
              <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
