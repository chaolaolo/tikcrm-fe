import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CreatePromotionsTab from './Tabs/CreatePromotionsTab';
import ListPromotionsTab from './Tabs/ListPromotionsTab';
import SavedConfigurationTab from './Tabs/SavedConfigurationTab';

const PromotionsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tạo Promotions');

  const tabs = [
    { label: 'Tạo Promotions' },
    { label: 'Danh sách Promotions' },
    { label: 'Cấu hình đã lưu' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Tạo Promotions':
        return <CreatePromotionsTab />;
      case 'Danh sách Promotions':
        return <ListPromotionsTab />;
      case 'Cấu hình đã lưu':
        return <SavedConfigurationTab />;
      default:
        return null;
    }
  };


  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3 ">
        <h6 className="mb-4 text-start">Quản lý Promotions</h6>
        <hr />
        {/* Store Dropdown */}
        <div className="row mb-3">
          <div className="col-md-5">
            <select className="form-select">
              <option>All Stores</option>
            </select>
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

export default PromotionsScreen;
