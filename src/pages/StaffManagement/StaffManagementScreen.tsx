import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActiveTab from './Tabs/ActiveTab';
import InactiveTab from './Tabs/InactiveTab';

const StaffManagementScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Active', icon: 'bi-check-circle' },
    { id: 2, label: 'Inactive', icon: 'bi-hourglass' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <ActiveTab />;
      case 2:
        return <InactiveTab />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">
        <h5 className="mb-4 text-start">Quản lý nhân viên</h5>
        <hr />
        <div className="d-flex justify-content-end align-items-center mb-3">
          <div className="d-flex gap-2">
            <button className="btn btn-primary">Thêm nhân viên</button>
            <button className="btn btn-outline-primary">Refresh</button>
          </div>
        </div>
        {/* Tabs */}
        <ul className="nav nav-tabs mb-2">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.label}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active text-primary' : 'text-black bg-light border-light-subtle'}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ marginRight: '2px' }}
              >
                <i
                  className={`bi ${tab.icon} me-2 ${activeTab === tab.id ? 'text-primary' : 'text-black'}`}
                  style={{ width: '20px' }}
                ></i>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        {renderContent()}
      </div>
    </div>
  );
};

export default StaffManagementScreen;
