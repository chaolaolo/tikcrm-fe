import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../../core/Divider/Divider';
import { Button } from 'antd';
import './login.css';
const LoginPage: React.FC = () => {
  const navigate = useNavigate();

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn form submit mặc định
    // Điều hướng đến trang dashboard
    navigate('/dashboard');
  };

  return (
    <div style={{
      backgroundColor: '#f1f5f7', // Màu light của Bootstrap
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto'
    }}>
      <div className="d-flex justify-content-center align-items-center min-vh-100 p-3">
        <div className="w-100" style={{ maxWidth: '600px', }}>
          <p className="text-center mb-8 fs-3 fw-normal">Login to TikCRM Management</p>
          <div className="card p-8 " style={{
            marginTop: '40px',
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <form>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm text-secondary">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="password" className="col-sm-2 col-form-label col-form-label-sm text-secondary">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn custom-login-btn w-100 mt-4">Login</button>

              <div className="mb-3 text-start">
                <Link to="/forgot-password"
                  className="custom-hover-underline fw-normal" style={{ fontSize: '16px', color: '#47bac1' }}>
                  Forgot password
                </Link>
                {/* <a href="#forgot-password" className=" text-decoration-none">Forgot password</a> */}
              </div>

              <div className="d-flex align-items-center mb-3">
                <hr className="flex-grow-1" />
                <span className="px-2 text-muted">OR</span>
                <hr className="flex-grow-1" />
              </div>

              <div className="text-center">
                <span className='text-light-emphasis'>Don't have an account? </span>
                <Link to="/register"
                  className="custom-hover-underline   fw-normal" style={{ fontSize: '16px', color: '#47bac1' }}>
                  Sign Up
                </Link>
                {/* <a href="#signup" className="text-decoration-none">Sign up</a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;