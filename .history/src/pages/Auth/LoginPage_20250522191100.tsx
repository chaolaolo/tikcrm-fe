// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LoginPage: React.FC = () => {
//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <div className="card p-4" style={{ width: '400px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
//         <h2 className="text-center mb-4">Login to TikTok Management</h2>
        
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input 
//               type="email" 
//               className="form-control" 
//               id="email" 
//               placeholder="Email"
//             />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input 
//               type="password" 
//               className="form-control" 
//               id="password" 
//               placeholder="Enter password"
//             />
//           </div>
          
//           <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
          
//           <div className="text-center mb-3">
//             <a href="#forgot-password" className="text-decoration-none">Forgot password</a>
//           </div>
          
//           <div className="d-flex align-items-center mb-3">
//             <hr className="flex-grow-1" />
//             <span className="px-2">OR</span>
//             <hr className="flex-grow-1" />
//           </div>
          
//           <div className="text-center">
//             <span>Don't have an account? </span>
//             <a href="#signup" className="text-decoration-none">Sign up</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    console.log('Login attempted with:', formData);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0" style={{ borderRadius: '12px' }}>
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-dark mb-0">Login to TikCRM Management</h2>
                </div>
                
                <div>
                  <div className="mb-3">
                    <label className="form-label text-muted fw-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        padding: '12px 16px'
                      }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label text-muted fw-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleInputChange}
                      style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        padding: '12px 16px'
                      }}
                    />
                  </div>
                  
                  <button
                    type="button"
                    className="btn btn-lg w-100 text-white fw-medium mb-3"
                    onClick={handleLogin}
                    style={{
                      backgroundColor: '#5fc9b8',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '16px'
                    }}
                  >
                    Login
                  </button>
                </div>
                
                <div className="text-center mb-4">
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none p-0"
                    onClick={handleForgotPassword}
                    style={{ color: '#5fc9b8', fontSize: '14px' }}
                  >
                    Forgot password
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="d-flex align-items-center mb-3">
                    <hr className="flex-grow-1" style={{ color: '#e0e0e0' }} />
                    <span className="px-3 text-muted small">OR</span>
                    <hr className="flex-grow-1" style={{ color: '#e0e0e0' }} />
                  </div>
                  
                  <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none p-0"
                      onClick={handleSignUp}
                      style={{ color: '#5fc9b8', fontSize: '14px' }}
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;