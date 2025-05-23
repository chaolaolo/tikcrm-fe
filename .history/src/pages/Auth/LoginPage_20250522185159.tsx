// import React, { useState } from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';
// import { Button } from 'antd';
// import Divider from '../../core/Divider/Divider';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div className="flex justify-center flex-col items-center h-screen">
//       <div className='text-center mt-5 mb-5'>
//         <h2 className='text-2xl'>Login to TikCRM Management</h2>
//       </div>
//       <div className='card'>
//         <div className='card-body'>
//           <div className='m-sm-4'>
//             {/* <div className="w-110 p-12 bg-white rounded-lg shadow-md"> */}
//               <form>
//                 <div className="mb-2 flex flex-col">
//                   <p className="!mb-1 !p-0 text-left text-sm text-gray-500">Email</p>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={password}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="mt-0 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-2 flex flex-col">
//                   <p className="!mb-1 !p-0 text-left text-sm text-gray-500">Password</p>
//                   <input
//                     type="password"
//                     placeholder="Enter Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="mt-0 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className='mt-2 mb-1'>
//                   <Button
//                     className='btn btn-primary pl-3 pr-3'
//                     type='primary'
//                     // onClick={handleLogin}
//                     htmlType='submit'
//                     // loading={isLoading}
//                     style={{ height: '38px', width: '100%' }}>
//                     Login
//                   </Button>
//                 </div>
//               </form>
//               <Link to='/forgot-password' className='text-left'>
//                 Forgot
//               </Link>
//               <Divider text={('OR')} />
//               <p>Don't have an account? <Link to="/register">Sign up</Link></p>
//             {/* </div> */}
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
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ width: '400px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4">Login to TikTok Management</h2>
        
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Email"
            />
          </div>
          
          <div className="mb-3">
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
  );
};

export default LoginPage;