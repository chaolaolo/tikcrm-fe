// import React, { useState } from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';
// import { Button } from 'antd';
// import Divider from '../../../core/Divider/Divider';

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


import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Login to TikCRM Management
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-teal-500 hover:text-teal-600 text-sm font-medium transition duration-200"
          >
            Forgot password
          </a>
        </div>

        <div className="mt-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-600 text-sm font-medium transition duration-200"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;