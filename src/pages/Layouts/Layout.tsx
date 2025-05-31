import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderManagementScreen from '../OrderManagement/OrderManagementScreen';
import logo from '../../assets/Logo/logo.png';
import miniLogo from '../../assets/Logo/mini-logo.png';
import ProductManagementScreen from '../ProductManagement/ProductManagementScreen';
import NicheManagementScreen from '../NicheManagement/NicheManagementScreen';
import AutoListingScreen from '../AutoListing/AutoListingScreen';
import PromotionsScreen from '../Promotions/PromotionsScreen';
import TaskManagementScreen from '../TaskManagement/TaskManagementScreen';
import FulfillManagementScreen from '../FulfillManagement/FulfillManagementScreen';
import BankManagementScreen from '../BankManagement/BankManagementScreen';
import PaymentCenterScreen from '../PaymentCenter/PaymentCenterScreen';
import ConnectShopScreen from '../ConnectShop/ConnectShopScreen';
import StaffManagementScreen from '../StaffManagement/StaffManagementScreen';
import AccountSettingsScreen from '../AccountSettings/AccountSettingsScreen';
import TemplateSettingsScreen from '../TemplateSettings/TemplateSettingsScreen';
import IncomeManagementScreen from '../IncomeManagement/IncomeManagementScreen';
import WarningSpaceReleaseScreen from '../WarningSpaceRelease/WarningSpaceReleaseScreen';
import { Link } from 'react-router-dom';
import './Layout.css';
import telegramIcon from '../../assets/telegramlogo.png';
import { useTranslation } from 'react-i18next';


interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeScreen, setActiveScreen] = useState('order-management');
    const { t } = useTranslation();


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
                return <AutoListingScreen isCollapsed={isCollapsed} />;
            case 'promotions':
                return <PromotionsScreen />;
            case 'task-management':
                return <TaskManagementScreen />;
            case 'fulfill-management':
                return <FulfillManagementScreen />;
            case 'bank-management':
                return <BankManagementScreen />;
            case 'income-management':
                return <IncomeManagementScreen />;
            case 'warning-space-release':
                return <WarningSpaceReleaseScreen />;
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
                    minWidth: isCollapsed ? '100px' : '230px',
                    maxWidth: isCollapsed ? '100px' : '230px',
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
                        <img
                            src={isCollapsed ? miniLogo : logo}
                            alt="Logo"
                            style={{
                                height: '32px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>

                {/* Menu Items */}
                <div className="py-3 flex-grow-1">
                    {/* Products Section */}
                    <div className="px-3 mb-2 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">{t('sidebar.products')}</p>}
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
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.orderManagement')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'product-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('product-management'); }}
                        >
                            <i className="bi bi-grid me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.productManagement')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'niche-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('niche-management'); }}
                        >
                            <i className="bi bi-tags me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.nicheManagement')}</span>}
                        </a>
                    </div>

                    {/* Tools Section */}
                    <div className="px-3 mb-2 mt-4 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">{t('sidebar.tools')}</p>}
                    </div>

                    <div className="ms-4">
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'auto-listing' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('auto-listing'); }}
                        >
                            <i className="bi bi-robot me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.autoListing')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'promotions' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('promotions'); }}
                        >
                            <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.promotions')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'task-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('task-management'); }}
                        >
                            <i className="bi bi-kanban me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.taskManagement')}</span>}
                        </a>
                    </div>

                    {/* Fulfill Section */}
                    <div className="px-3 mb-2 mt-4 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">{t('sidebar.fullfill')}</p>}
                    </div>

                    <div className="ms-4">
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'fulfill-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('fulfill-management'); }}
                        >
                            <i className="bi bi-lightning me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.fulfillManagement')}</span>}
                        </a>
                    </div>

                    {/* Quản lý tài chính Section */}
                    <div className="px-3 mb-2 mt-4 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">{t('sidebar.finance')}</p>}
                    </div>

                    <div className="ms-4">
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'bank-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('bank-management'); }}
                        >
                            <i className="bi bi-bank me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.bankManagement')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'income-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('income-management'); }}
                        >
                            <i className="bi bi-cash me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.fundManagement')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'warning-space-release' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('warning-space-release'); }}
                        >
                            <i className="bi bi-shield-check me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.fraudAlert')}</span>}
                        </a>
                    </div>

                    {/* Accounts Section */}
                    <div className="px-3 mb-2 mt-4 text-start">
                        {!isCollapsed && <p className="text-white-50 fw-bold mb-2">{t('sidebar.accounts')}</p>}
                    </div>

                    <div className="ms-4">
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'payment-center' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('payment-center'); }}
                        >
                            <i className="bi bi-shop me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.paymentCenter')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'connect-shop' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('connect-shop'); }}
                        >
                            <i className="bi bi-link me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.connectShop')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'staff-management' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('staff-management'); }}
                        >
                            <i className="bi bi-people me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.staffManagement')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'account-settings' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('account-settings'); }}
                        >
                            <i className="bi bi-gear me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.accountSettings')}</span>}
                        </a>
                        <a
                            href="#"
                            className={`d-flex align-items-center text-decoration-none p-2 rounded mb-1 ${activeScreen === 'template-settings' ? 'text-white bg-primary' : 'text-white-50 hover-bg-secondary'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleMenuClick('template-settings'); }}
                        >
                            <i className="bi bi-file-earmark me-3" style={{ width: '20px' }}></i>
                            {!isCollapsed && <span
                                style={{
                                    fontSize: '14px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'inline-block',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >{t('sidebar.templateSettings')}</span>}
                        </a>
                    </div>


                </div>
                {/* Sidebar Footer */}
                <div className="ms-4 mt-auto mb-4 px-1">
                    <a
                        href="#"
                        className={`d-flex align-items-center text-decoration-none py-3 px-2 rounded mb-1 text-white-50 bg-secondary`}
                        onClick={(e) => { e.preventDefault(); handleMenuClick(''); }}
                    >
                        {!isCollapsed && (<span
                            className='text-start'
                            style={{
                                fontSize: '14px',
                                fontFamily: 'Arial, sans-serif',
                                wordBreak: 'break-all',
                            }}
                        >{t('sidebar.yourPlan')}</span>)}
                        <span
                            className={`ms-auto text-warning`}
                            style={{
                                fontSize: '14px',
                                whiteSpace: isCollapsed ? 'normal' : 'nowrap',
                            }}
                        >Free 0/8</span>
                    </a>
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
                            <Link to="/"
                                className="chat-w-customer fw-normal me-3 text-decoration-none"
                                style={{
                                    fontSize: '16px',
                                    color: '#47bac1',
                                    textDecoration: 'none'
                                }}>
                                Chat với khách hàng
                            </Link>
                            <div className="dropdown">
                                <button
                                    className="btn dropdown-toggle border-0 bg-transparent text-dark px-0"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ fontSize: '16px' }}
                                >
                                    tranchaufw04@gmail.com - Owner
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                                    <li>
                                        <a className="dropdown-item text-center" style={{ fontSize: '15px' }}>
                                            <i className='bi bi-person me-2'></i>Profile</a>
                                        <li><hr className="dropdown-divider" /></li>
                                        <a className="dropdown-item text-center" style={{ fontSize: '15px' }}>
                                            <i className='bi bi-gear me-2'></i>Settings</a>
                                        <li><hr className="dropdown-divider" /></li>
                                        <a className="dropdown-item text-center" style={{ fontSize: '15px' }}>
                                            <i className='bi bi-box-arrow-right me-2'></i>Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* nút bấm chat */}
                <Link to="/"
                    className="rounded-circle"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 10,
                        cursor: 'pointer',
                        transition: 'opacity 0.2s ease-in-out'
                    }}
                >
                    <img src={telegramIcon} alt="Telegram Chat" style={{ width: '50px', height: '50px' }} />
                </Link>

                {/* Page Content */}
                <main className="p-4" style={{
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    height: 'calc(100vh - 64px)',
                    width: '100%',
                    flexGrow: 1
                }}>
                    {renderContent()}
                </main>
            </div>

            <style>{`
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