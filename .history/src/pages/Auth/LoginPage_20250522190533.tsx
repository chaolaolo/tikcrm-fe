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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginPage: React.FC = () => {
  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
      <h2 className="text-center">Login to TikCRM Management</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-teal w-100">Login</button>
      </form>
      <div className="d-flex justify-content-between mt-3">
        <a href="#">Forgot password</a>
      </div>
      <hr />
      <div className="text-center">
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
