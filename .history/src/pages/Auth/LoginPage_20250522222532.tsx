// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LoginPage: React.FC = () => {
//   return (
//     <div style={{
//       backgroundColor: '#f1f5f7', // Màu light của Bootstrap
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       overflow: 'auto'
//     }}>
//       <div className="d-flex justify-content-center align-items-center min-vh-100 p-3">
//         <div className="w-100" style={{ maxWidth: '600px', }}>
//           <p className="text-center mb-4 fs-2">Login to TikTok Management</p>
//           <div className="card p-8" style={{
//             backgroundColor: 'white',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//           }}>
//             <form>
//               <div className="mb-3 text-start">
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Email"
//                 />
//               </div>

//               <div className="mb-3 text-start">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Enter password"
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

//               <div className="text-center mb-3">
//                 <a href="#forgot-password" className="text-decoration-none">Forgot password</a>
//               </div>

//               <div className="d-flex align-items-center mb-3">
//                 <hr className="flex-grow-1" />
//                 <span className="px-2">OR</span>
//                 <hr className="flex-grow-1" />
//               </div>

//               <div className="text-center">
//                 <span>Don't have an account? </span>
//                 <a href="#signup" className="text-decoration-none">Sign up</a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#f1f5f7',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px', // Giảm maxWidth để phù hợp với thiết kế trong ảnh
      }}>
        <h2 className="text-center mb-4" style={{ fontSize: '24px', fontWeight: '500' }}>Login to TikTok Management</h2>
        <div className="card" style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          borderRadius: '8px'
        }}>
          <form>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label" style={{ marginBottom: '8px' }}>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                style={{ padding: '10px', borderRadius: '4px' }}
              />
            </div>

            <div className="mb-4 text-start">
              <label htmlFor="password" className="form-label" style={{ marginBottom: '8px' }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                style={{ padding: '10px', borderRadius: '4px' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-100 mb-3" 
              style={{
                padding: '10px',
                borderRadius: '4px',
                fontWeight: '500'
              }}
            >
              Login
            </button>

            <div className="text-center mb-4">
              <a href="#forgot-password" className="text-decoration-none" style={{ fontSize: '14px' }}>
                Forgot password
              </a>
            </div>

            <div className="d-flex align-items-center mb-4">
              <hr className="flex-grow-1" style={{ borderTop: '1px solid #eaeaea' }} />
              <span className="px-2" style={{ fontSize: '14px', color: '#666' }}>OR</span>
              <hr className="flex-grow-1" style={{ borderTop: '1px solid #eaeaea' }} />
            </div>

            <div className="text-center" style={{ fontSize: '14px' }}>
              <span style={{ color: '#666' }}>Don't have an account? </span>
              <a href="#signup" className="text-decoration-none" style={{ fontWeight: '500' }}>
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;