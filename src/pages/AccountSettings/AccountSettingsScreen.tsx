import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import MarketingTab from './Tabs/MarketingTab';
import ChangePasswordTab from './Tabs/ChangePasswordTab';
import NotificationTab from './Tabs/NotificationTab';
import AccountSettingsTab from './Tabs/AccountSettingsTab';

const AccountSettingsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Cài đặt tài khoản' },
    { id: 2, label: 'Cài đặt thông báo' },
    { id: 3, label: 'Đổi mật khẩu' },
    { id: 4, label: 'Tiếp thị' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <AccountSettingsTab />;
      case 2:
        return <NotificationTab />;
      case 3:
        return <ChangePasswordTab />;
      case 4:
        return <MarketingTab />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">
        <h5 className="mb-4 text-start">Quản lý tài khoản</h5>
        <hr />
        {/* Tabs */}
        <ul className="nav nav-tabs mb-2">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.label}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active text-primary' : 'text-black bg-light border-light-subtle'}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ marginRight: '2px' }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* content */}
        {renderContent()}

      </div>
    </div>
  );
};

export default AccountSettingsScreen;