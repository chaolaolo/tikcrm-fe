import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

const RegisterPage: React.FC = () => {
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
          <p className="text-center mb-8 fs-3 fw-normal">Register a TikCRM accountaccount</p>
          <div className="card p-8 " style={{
            marginTop: '40px',
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <form>
              <div className="mb-2 text-start">
                <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm text-secondary">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="mb-2 text-start">
                <label htmlFor="password" className="col-sm-2 col-form-label col-form-label-sm text-secondary">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="mb-2 text-start">
                <label htmlFor="fullName" className="col-sm-2 col-form-label col-form-label-sm text-secondary">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>

              <div className="mb-2 text-start">
                <label htmlFor="telegram" className="col-sm-2 col-form-label col-form-label-sm text-secondary">Telegram</label>
                <input
                  type="text"
                  className="form-control"
                  id="telegram"
                  placeholder="You Telegram username (Ex: @tikcrm, @tranphuc, @nguyenhai, etc.)"
                />
              </div>

              <div className="mb-2 text-start">
                <label htmlFor="referralCode" className="w-100 col-sm-2 col-form-label col-form-label-sm text-secondary">Referral code</label>
                <input
                  type="text"
                  className="form-control"
                  id="referralCode"
                  placeholder="Enter Referral code (Optional)"
                />
              </div>

              <button type="submit" className="btn custom-login-btn w-100 mt-4 mb-4">Sign Up</button>

              <div className="text-center">
                <span className='text-light-emphasis'>Already have an account? </span>
                <Link to="/login"
                  className="custom-hover-underline fw-normal" style={{ fontSize: '16px', color: '#47bac1' }}>
                  Sign In
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

export default RegisterPage;