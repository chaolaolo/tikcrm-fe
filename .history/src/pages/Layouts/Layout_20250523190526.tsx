// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="d-flex" style={{ minHeight: '100%' }}>
//       {/* Sidebar */}
//       <div 
//         className={`sidebar text-white position-fixed ${isCollapsed ? 'collapsed-sidebar' : ''}`}
//         style={{ 
//           width: isCollapsed ? '80px' : '200px',
//           transition: 'width 0.3s ease',
//           zIndex: 1000,
//           overflowY: 'auto',
//           overflowX: 'hidden',
//           background: '#001529',
//         }}
//       >
//         {/* Header */}
//         <div className="p-3 border-bottom border-secondary">
//           <div className="d-flex align-items-center">
//             <div 
//               className="bg-primary rounded d-flex align-items-center justify-content-center me-2"
//               style={{ width: '32px', height: '32px', fontSize: '16px', fontWeight: 'bold' }}
//             >
//               T
//             </div>
//             {!isCollapsed && <h5 className="mb-0 text-white">TikCRM</h5>}
//           </div>
//         </div>

//         {/* Menu Items */}
//         <div className="py-3">
//           {/* Products Section */}
//           <div className="px-3 mb-2 text-start">
//             {!isCollapsed && <p className="text-white-50 fw-bold">Products</p>}
//           </div>
          
//           <div className="ms-4">
//             <a href="#" className="d-flex align-items-center text-white text-decoration-none p-2 rounded mb-1 bg-primary">
//               <i className="bi bi-box me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Order Management</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-grid me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Product Management</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-tags me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Niche Management</span>}
//             </a>
//           </div>

//           {/* Tools Section */}
//           <div className="px-3 mb-2 mt-4 text-start">
//             {!isCollapsed && <p className="text-white-50 fw-bold">Tools</p>}
//           </div>
          
//           <div className="ms-4">
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-robot me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Auto Listing</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Promotions</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-kanban me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Task management</span>}
//             </a>
//           </div>

//           {/* Fulfill Section */}
//           <div className="px-3 mb-2 mt-4 text-start">
//             {!isCollapsed && <p className="text-white-50 fw-bold">Fulfill</p>}
//           </div>
          
//           <div className="ms-4">
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Quản lý fulfill</span>}
//             </a>
//           </div>

//           {/* Quản lý tài chính Section */}
//           <div className="px-3 mb-2 mt-4 text-start">
//             {!isCollapsed && <p className="text-white-50 fw-bold">Quản lý tài chính</p>}
//           </div>
          
//           <div className="ms-4">
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-bank me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Quản lý bank</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-cash me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Quản lý tiền về</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-shield-check me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Cảnh báo gian lận</span>}
//             </a>
//           </div>

//           {/* Accounts Section */}
//           <div className="px-3 mb-2 mt-4 text-start">
//             {!isCollapsed && <p className="text-white-50 fw-bold">Accounts</p>}
//           </div>
          
//           <div className="ms-4">
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-shop me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Trung tâm thanh toán</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-link me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Connect Shop</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-people me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Quản lý nhân viên</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-gear me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Cài đặt tài khoản</span>}
//             </a>
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-file-earmark me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Cài đặt Template</span>}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div 
//         className="flex-grow-1"
//         style={{ 
//           marginLeft: isCollapsed ? '60px' : '280px',
//           transition: 'margin-left 0.3s ease'
//         }}
//       >
//         {/* Top Navigation */}
//         <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
//           <div className="container-fluid">
//             <button 
//               className="btn btn-outline-secondary me-3"
//               onClick={toggleSidebar}
//             >
//               <i className="bi bi-list"></i>
//             </button>
            
//             <div className="d-flex align-items-center ms-auto">
//               <span className="me-3 text-primary">Chat với khách hàng</span>
//               <span className="me-3">chaolaolo290604@gmail.com - Owner</span>
//               <div className="dropdown">
//                 <button 
//                   className="btn btn-sm btn-outline-secondary dropdown-toggle" 
//                   type="button" 
//                   data-bs-toggle="dropdown"
//                 >
//                   <i className="bi bi-person-circle"></i>
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#">Profile</a></li>
//                   <li><a className="dropdown-item" href="#">Settings</a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item" href="#">Logout</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Page Content */}
//         <main className="p-4">
//           {children}
//         </main>
//       </div>

//       {/* <style jsx>{`
//         .hover-bg-secondary:hover {
//           background-color: rgba(108, 117, 125, 0.2) !important;
//         }
        
//         .collapsed-sidebar .text-muted {
//           display: none;
//         }
        
//         @media (max-width: 768px) {
//           .sidebar {
//             width: 60px !important;
//           }
          
//           .main-content {
//             margin-left: 60px !important;
//           }
//         }
//       `}</style> */}
//     </div>
//   );
// };

// export default Layout;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="d-flex vh-100" style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
      {/* Sidebar */}
      <div 
        className={`sidebar text-white d-flex flex-column ${isCollapsed ? 'collapsed-sidebar' : ''}`}
        style={{ 
          width: isCollapsed ? '80px' : '200px',
          minWidth: isCollapsed ? '80px' : '200px',
          maxWidth: isCollapsed ? '80px' : '200px',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          overflowY: 'auto',
          overflowX: 'hidden',
          background: '#001529',
          height: '100vh',
          flexShrink: 0
        }}
      >
        {/* Header */}
        <div className="p-3 border-bottom border-secondary flex-shrink-0">
          <div className="d-flex align-items-center">
            <div 
              className="bg-primary rounded d-flex align-items-center justify-content-center me-2"
              style={{ width: '32px', height: '32px', fontSize: '16px', fontWeight: 'bold' }}
            >
              T
            </div>
            {!isCollapsed && <h5 className="mb-0 text-white">TikCRM</h5>}
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-3 flex-grow-1">
          {/* Products Section */}
          <div className="px-3 mb-2 text-start">
            {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Products</p>}
          </div>
          
          <div className="ms-4">
            <Link to="#" className="d-flex align-items-center text-white text-decoration-none p-2 rounded mb-1 bg-primary">
              <i className="bi bi-box me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Order Management</span>}
            </Link>
            <Link to="/login" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-grid me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Product Management</span>}
            </Link>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-tags me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Niche Management</span>}
            </a>
          </div>

          {/* Tools Section */}
          <div className="px-3 mb-2 mt-4 text-start">
            {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Tools</p>}
          </div>
          
          <div className="ms-4">
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-robot me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Auto Listing</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Promotions</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-kanban me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Task management</span>}
            </a>
          </div>

          {/* Fulfill Section */}
          <div className="px-3 mb-2 mt-4 text-start">
            {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Fulfill</p>}
          </div>
          
          <div className="ms-4">
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Quản lý fulfill</span>}
            </a>
          </div>

          {/* Quản lý tài chính Section */}
          <div className="px-3 mb-2 mt-4 text-start">
            {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Quản lý tài chính</p>}
          </div>
          
          <div className="ms-4">
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-bank me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Quản lý bank</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-cash me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Quản lý tiền về</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-shield-check me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Cảnh báo gian lận</span>}
            </a>
          </div>

          {/* Accounts Section */}
          <div className="px-3 mb-2 mt-4 text-start">
            {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Accounts</p>}
          </div>
          
          <div className="ms-4">
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-shop me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Trung tâm thanh toán</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-link me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Connect Shop</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-people me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Quản lý nhân viên</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-gear me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Cài đặt tài khoản</span>}
            </a>
            <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
              <i className="bi bi-file-earmark me-3" style={{ width: '20px' }}></i>
              {!isCollapsed && <span>Cài đặt Template</span>}
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="d-flex flex-column"
        style={{ 
          height: '100vh',
          overflow: 'hidden',
          width: `calc(100% - ${isCollapsed ? '80px' : '200px'})`,
          flexGrow: 1,
          flexShrink: 1,
          minWidth: 0
        }}
      >
        {/* Top Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom flex-shrink-0">
          <div className="container-fluid">
            <button 
              className="btn btn-outline-secondary me-3"
              onClick={toggleSidebar}
            >
              <i className="bi bi-list"></i>
            </button>
            
            <div className="d-flex align-items-center ms-auto">
              <span className="me-3 text-primary">Chat với khách hàng</span>
              <span className="me-3">chaolaolo290604@gmail.com - Owner</span>
              <div className="dropdown">
                <button 
                  className="btn btn-sm btn-outline-secondary dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-4" style={{ 
          overflowY: 'auto',
          overflowX: 'hidden',
          height: 'calc(100vh - 64px)', /* Trừ đi chiều cao của navbar */
          width: '100%',
          flexGrow: 1
        }}>
          {children}
        </main>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, html, #root {
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
          width: 100%;
        }
        
        .hover-bg-secondary:hover {
          background-color: rgba(108, 117, 125, 0.2) !important;
        }
        
        .collapsed-sidebar .text-muted {
          display: none;
        }
        
        @media (max-width: 768px) {
          .sidebar {
            width: 60px !important;
            min-width: 60px !important;
            max-width: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;