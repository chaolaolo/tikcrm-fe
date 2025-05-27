import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OrderDetailsTab from './Tabs/OrderDetailsTab';
import StatementsTab from './Tabs/StatementsTab';
import PaymentsTab from './Tabs/PaymentsTab';
import ReserveDetailsTab from './Tabs/ReserveDetailsTab';

const IncomeManagementScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Order details');

  const tabs = [
    { label: 'Order details' },
    { label: 'Statements' },
    { label: 'Payments' },
    { label: 'Reserve details' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Order details':
        return OrderDetailsTab();
      case 'Statements':
        return StatementsTab();
      case 'Payments':
        return PaymentsTab();
      case 'Reserve details':
        return ReserveDetailsTab();
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Quản lý tiền về</h5>
          <div>
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-cloud-download me-1"></i>Export paid history
            </button>
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-cloud-sync me-1"></i>Sync tiktok shop finance
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-2">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.label}>
              <button
                className={`nav-link ${activeTab === tab.label ? 'active text-primary' : 'text-black bg-light border-light-subtle'}`}
                onClick={() => setActiveTab(tab.label)}
                style={{ marginRight: '2px' }}
              >
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

export default IncomeManagementScreen;

