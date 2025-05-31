import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RechargeHistoryTab from './Tabs/RechargeHistoryTab';
import OrderTab from './Tabs/OrderTab';

const PaymentCenterScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Đơn hàng');

  const tabs = [
    { label: 'Đơn hàng' },
    { label: 'Lịch sử nạp tiền' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Đơn hàng':
        return <OrderTab/>;
      case 'Lịch sử nạp tiền':
        return <RechargeHistoryTab/>;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="row mb-3">
        <div className="col-md-5">
          <div className="bg-dark text-white text-start p-4 rounded">
            <h5 className="mb-1">Thông tin gói cước</h5>
            <h2 className="fw-bold">Free</h2>
            <div className="d-flex align-items-center gap-2 mt-3">
              <button className="btn btn-outline-light">Nâng cấp</button>
              <button className="btn btn-warning text-white">Gia hạn</button>
              <span className="ms-auto small">
                <i className="bi bi-credit-card-2-back"></i> 0/8
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="bg-dark rounded ps-1">
            <div className="bg-white border rounded p-4 h-100 d-flex text-start justify-content-between align-items-end">
              <div>
                <h6>Thông tin ví chính</h6>
                <h2 className="fw-bold">$0</h2>
                <p className="text-black small mb-3">≈ $0</p>
              </div>
              <div>
                <button className="btn btn-primary">Nạp tiền</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white rounded p-3">
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

        {/* content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default PaymentCenterScreen;
