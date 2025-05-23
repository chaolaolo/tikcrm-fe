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
//     <div className="d-flex vh-100" style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
//       {/* Sidebar */}
//       <div 
//         className={`sidebar text-white d-flex flex-column ${isCollapsed ? 'collapsed-sidebar' : ''}`}
//         style={{ 
//           width: isCollapsed ? '80px' : '200px',
//           minWidth: isCollapsed ? '80px' : '200px',
//           maxWidth: isCollapsed ? '80px' : '200px',
//           transition: 'all 0.3s ease',
//           zIndex: 1000,
//           overflowY: 'auto',
//           overflowX: 'hidden',
//           background: '#001529',
//           height: '100vh',
//           flexShrink: 0
//         }}
//       >
//         {/* Header */}
//         <div className="p-3 border-bottom border-secondary flex-shrink-0">
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
//         <div className="py-3 flex-grow-1">
//           {/* Products Section */}
//           <div className="px-3 mb-2 text-start">
//             {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Products</p>}
//           </div>

//           <div className="ms-4">
//             <a href="#" className="d-flex align-items-center text-white text-decoration-none p-2 rounded mb-1 bg-primary">
//               <i className="bi bi-box me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Order Management</span>}
//             </a>
//             <a href="/login" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
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
//             {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Tools</p>}
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
//             {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Fulfill</p>}
//           </div>

//           <div className="ms-4">
//             <a href="#" className="d-flex align-items-center text-white-50 text-decoration-none p-2 rounded mb-1 hover-bg-secondary">
//               <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
//               {!isCollapsed && <span>Quản lý fulfill</span>}
//             </a>
//           </div>

//           {/* Quản lý tài chính Section */}
//           <div className="px-3 mb-2 mt-4 text-start">
//             {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Quản lý tài chính</p>}
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
//             {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Accounts</p>}
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
//         className="d-flex flex-column"
//         style={{ 
//           height: '100vh',
//           overflow: 'hidden',
//           width: `calc(100% - ${isCollapsed ? '80px' : '200px'})`,
//           flexGrow: 1,
//           flexShrink: 1,
//           minWidth: 0
//         }}
//       >
//         {/* Top Navigation */}
//         <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom flex-shrink-0">
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
//         <main className="p-4" style={{ 
//           overflowY: 'auto',
//           overflowX: 'hidden',
//           height: 'calc(100vh - 64px)', /* Trừ đi chiều cao của navbar */
//           width: '100%',
//           flexGrow: 1
//         }}>
//           {children}
//         </main>
//       </div>

//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body, html, #root {
//           height: 100%;
//           overflow: hidden;
//           margin: 0;
//           padding: 0;
//           width: 100%;
//         }

//         .hover-bg-secondary:hover {
//           background-color: rgba(108, 117, 125, 0.2) !important;
//         }

//         .collapsed-sidebar .text-muted {
//           display: none;
//         }

//         @media (max-width: 768px) {
//           .sidebar {
//             width: 60px !important;
//             min-width: 60px !important;
//             max-width: 60px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Layout;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderManagementScreen from '../Dashboard/Dashboard';

interface LayoutProps {
    children?: React.ReactNode;
}

// // Component cho từng màn hình
// export const OrderManagementScreen = () => (
//   <div>
//     <h2 className="mb-4">Order Management</h2>
//     <div className="row mb-3">
//       <div className="col-md-12">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4>Orders</h4>
//           <div className="d-flex gap-2">
//             <button className="btn btn-primary">
//               <i className="bi bi-lightning-fill me-2"></i>Auto Fulfill
//             </button>
//             <button className="btn btn-info">
//               <i className="bi bi-download me-2"></i>Export order
//             </button>
//             <button className="btn btn-success">
//               <i className="bi bi-arrow-clockwise me-2"></i>Sync order
//             </button>
//             <button className="btn btn-secondary">
//               <i className="bi bi-arrow-clockwise me-2"></i>Refresh
//             </button>
//           </div>
//         </div>

//         {/* Order Tabs */}
//         <ul className="nav nav-tabs mb-3">
//           <li className="nav-item">
//             <a className="nav-link active" href="#">Orders Without Design</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Orders With Design (Not Yet Fulfilled)</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Overdue Orders</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Suspicious Orders</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Returned Orders</a>
//           </li>
//         </ul>

//         {/* Filters */}
//         <div className="row mb-3">
//           <div className="col-md-3">
//             <input type="text" className="form-control" placeholder="Search order id" />
//           </div>
//           <div className="col-md-3">
//             <input type="text" className="form-control" placeholder="Search product id" />
//           </div>
//           <div className="col-md-3">
//             <input type="text" className="form-control" placeholder="Search product name" />
//           </div>
//           <div className="col-md-3">
//             <select className="form-select">
//               <option>All Stores</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-md-3">
//             <select className="form-select">
//               <option>All Staff</option>
//             </select>
//           </div>
//           <div className="col-md-3">
//             <select className="form-select">
//               <option>All Services</option>
//             </select>
//           </div>
//           <div className="col-md-3">
//             <select className="form-select">
//               <option>All Statuses</option>
//             </select>
//           </div>
//           <div className="col-md-3">
//             <input type="date" className="form-control" />
//           </div>
//         </div>

//         {/* Orders Table */}
//         <div className="table-responsive">
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Account / Seller</th>
//                 <th>Order</th>
//                 <th>Order info</th>
//                 <th>Price</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td colSpan="6" className="text-center py-5">
//                   <div className="d-flex flex-column align-items-center">
//                     <i className="bi bi-inbox" style={{ fontSize: '3rem', color: '#ccc' }}></i>
//                     <p className="text-muted mt-2">No data</p>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   </div>
// );

export const ProductManagementScreen = () => (
    <div>
        <h2 className="mb-4">Product Management</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Manage Products</h5>
                        <p className="card-text">Here you can add, edit, and manage all your products.</p>
                        <button className="btn btn-primary me-2">Add New Product</button>
                        <button className="btn btn-outline-secondary">Import Products</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const NicheManagementScreen = () => (
    <div>
        <h2 className="mb-4">Niche Management</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Manage Niches</h5>
                        <p className="card-text">Organize and manage your product niches and categories.</p>
                        <button className="btn btn-success me-2">Create Niche</button>
                        <button className="btn btn-outline-primary">View All Niches</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AutoListingScreen = () => (
    <div>
        <h2 className="mb-4">Auto Listing</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Automated Product Listing</h5>
                        <p className="card-text">Set up automated rules for listing products across platforms.</p>
                        <button className="btn btn-warning me-2">
                            <i className="bi bi-robot me-2"></i>Configure Auto Listing
                        </button>
                        <button className="btn btn-outline-info">View Listing Rules</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PromotionsScreen = () => (
    <div>
        <h2 className="mb-4">Promotions</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Marketing Promotions</h5>
                        <p className="card-text">Create and manage promotional campaigns and discounts.</p>
                        <button className="btn btn-danger me-2">
                            <i className="bi bi-lightning me-2"></i>New Campaign
                        </button>
                        <button className="btn btn-outline-warning">Active Promotions</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const TaskManagementScreen = () => (
    <div>
        <h2 className="mb-4">Task Management</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Project Tasks</h5>
                        <p className="card-text">Track and manage all your business tasks and projects.</p>
                        <button className="btn btn-primary me-2">
                            <i className="bi bi-plus-circle me-2"></i>Add Task
                        </button>
                        <button className="btn btn-outline-secondary">
                            <i className="bi bi-kanban me-2"></i>Kanban View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const FulfillManagementScreen = () => (
    <div>
        <h2 className="mb-4">Quản lý Fulfill</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Order Fulfillment</h5>
                        <p className="card-text">Manage order processing and shipping operations.</p>
                        <button className="btn btn-success me-2">Process Orders</button>
                        <button className="btn btn-outline-primary">Shipping Status</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const BankManagementScreen = () => (
    <div>
        <h2 className="mb-4">Quản lý Bank</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Banking & Payments</h5>
                        <p className="card-text">Manage bank accounts and payment methods.</p>
                        <button className="btn btn-info me-2">
                            <i className="bi bi-bank me-2"></i>Add Bank Account
                        </button>
                        <button className="btn btn-outline-success">View Transactions</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PaymentCenterScreen = () => (
    <div>
        <h2 className="mb-4">Trung tâm thanh toán</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Payment Center</h5>
                        <p className="card-text">Centralized payment processing and management.</p>
                        <button className="btn btn-primary me-2">
                            <i className="bi bi-shop me-2"></i>Payment Settings
                        </button>
                        <button className="btn btn-outline-info">Transaction History</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ConnectShopScreen = () => (
    <div>
        <h2 className="mb-4">Connect Shop</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Shop Integrations</h5>
                        <p className="card-text">Connect and manage your online store integrations.</p>
                        <button className="btn btn-success me-2">
                            <i className="bi bi-link me-2"></i>Connect New Shop
                        </button>
                        <button className="btn btn-outline-primary">Manage Connections</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const StaffManagementScreen = () => (
    <div>
        <h2 className="mb-4">Quản lý nhân viên</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Staff Management</h5>
                        <p className="card-text">Manage team members and their permissions.</p>
                        <button className="btn btn-primary me-2">
                            <i className="bi bi-person-plus me-2"></i>Add Staff Member
                        </button>
                        <button className="btn btn-outline-secondary">
                            <i className="bi bi-people me-2"></i>View All Staff
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AccountSettingsScreen = () => (
    <div>
        <h2 className="mb-4">Cài đặt tài khoản</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Account Settings</h5>
                        <p className="card-text">Manage your account preferences and security settings.</p>
                        <button className="btn btn-warning me-2">
                            <i className="bi bi-gear me-2"></i>Edit Settings
                        </button>
                        <button className="btn btn-outline-danger">Security Options</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const TemplateSettingsScreen = () => (
    <div>
        <h2 className="mb-4">Cài đặt Template</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Template Management</h5>
                        <p className="card-text">Create and manage email and document templates.</p>
                        <button className="btn btn-info me-2">
                            <i className="bi bi-file-earmark-plus me-2"></i>New Template
                        </button>
                        <button className="btn btn-outline-primary">View Templates</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeScreen, setActiveScreen] = useState('order-management');

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleMenuClick = (screenId: string) => {
        setActiveScreen(screenId);
    };

    const renderContent = () => {
        if (children) {
            return children;
        }

        switch (activeScreen) {
            case 'order-management':
                return <OrderManagementScreen />;
            case 'product-management':
                return <ProductManagementScreen />;
            case 'niche-management':
                return <NicheManagementScreen />;
            case 'auto-listing':
                return <AutoListingScreen />;
            case 'promotions':
                return <PromotionsScreen />;
            case 'task-management':
                return <TaskManagementScreen />;
            case 'fulfill-management':
                return <FulfillManagementScreen />;
            case 'bank-management':
                return <BankManagementScreen />;
            case 'payment-center':
                return <PaymentCenterScreen />;
            case 'connect-shop':
                return <ConnectShopScreen />;
            case 'staff-management':
                return <StaffManagementScreen />;
            case 'account-settings':
                return <AccountSettingsScreen />;
            case 'template-settings':
                return <TemplateSettingsScreen />;
            default:
                return <OrderManagementScreen />;
        }
    };

    return (
        <div className="d-flex vh-100" style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
            {/* Sidebar */}
            <div
                className={`text-white d-flex flex-column ${isCollapsed ? 'collapsed-sidebar' : ''}`}
                style={{
                    // width: isCollapsed ? '100px' : '200px',
                    // minWidth: isCollapsed ? '100px' : '200px',
                    // maxWidth: isCollapsed ? '100px' : '200px',
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
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'order-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('order-management'); }}
                        >
                            <i className="bi bi-box me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    maxWidth: '120px'
                                }}>Order Management</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'product-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('product-management'); }}
                        >
                            <i className="bi bi-grid me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Product Management ManagementManagement Management Management </span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'niche-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('niche-management'); }}
                        >
                            <i className="bi bi-tags me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Niche Management</span>}
                        </a>
                    </div>

                    {/* Tools Section */}
                    <div className="px-3 mb-2 mt-4 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Tools</p>}
                    </div>

                    <div className="ms-4">
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'auto-listing' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('auto-listing'); }}
                        >
                            <i className="bi bi-robot me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Auto Listing</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'promotions' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('promotions'); }}
                        >
                            <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Promotions</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'task-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('task-management'); }}
                        >
                            <i className="bi bi-kanban me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Task management</span>}
                        </a>
                    </div>

                    {/* Fulfill Section */}
                    <div className="px-3 mb-2 mt-4 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Fulfill</p>}
                    </div>

                    <div className="ms-4">
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'fulfill-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('fulfill-management'); }}
                        >
                            <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Quản lý fulfill</span>}
                        </a>
                    </div>

                    {/* Quản lý tài chính Section */}
                    <div className="px-3 mb-2 mt-4 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">Quản lý tài chính</p>}
                    </div>

                    <div className="ms-4">
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'bank-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('bank-management'); }}
                        >
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
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'payment-center' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('payment-center'); }}
                        >
                            <i className="bi bi-shop me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Trung tâm thanh toán</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'connect-shop' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('connect-shop'); }}
                        >
                            <i className="bi bi-link me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Connect Shop</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'staff-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('staff-management'); }}
                        >
                            <i className="bi bi-people me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Quản lý nhân viên</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'account-settings' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('account-settings'); }}
                        >
                            <i className="bi bi-gear me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span>Cài đặt tài khoản</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'template-settings' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('template-settings'); }}
                        >
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
                    {renderContent()}
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