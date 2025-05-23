import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage: React.FC = () => {
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
          <p className="text-center mb-8 fs-2">Login to TikTok Management</p>
          <div className="card m-4 p-8 " style={{
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <form className='mt-4'>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

              <div className="text-center mb-3">
                <a href="#forgot-password" className="text-decoration-none">Forgot password</a>
              </div>

              <div className="d-flex align-items-center mb-3">
                <hr className="flex-grow-1" />
                <span className="px-2">OR</span>
                <hr className="flex-grow-1" />
              </div>

              <div className="text-center">
                <span>Don't have an account? </span>
                <a href="#signup" className="text-decoration-none">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;