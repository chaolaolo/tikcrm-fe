import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ConfigurationGroupTab from './Tabs/ConfigurationGroupTab';
import CategoryConfigurationTab from './Tabs/CategoryConfigurationTab';
import SKUConfigurationTab from './Tabs/SKUConfigurationTab';
import Description1ConfigTab from './Tabs/Description1ConfigTab';
import Description2ConfigTab from './Tabs/Description2ConfigTab';

const TemplateSettingsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Nhóm cấu hình' },
    { id: 2, label: 'Cấu hình Category' },
    { id: 3, label: 'Cấu hình SKU' },
    { id: 4, label: 'Cấu hình Description 1' },
    { id: 5, label: 'Cấu hình Description 2 (TOP-BOTTOM)' },
  ];


  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return ConfigurationGroupTab();
      case 2:
        return CategoryConfigurationTab();
      case 3:
        return SKUConfigurationTab();
      case 4:
        return Description1ConfigTab();
      case 5:
        return Description2ConfigTab();
      default:
        return null;
    }
  };


  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Cài đặt Template</h5>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-2">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.label}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active text-primary' : 'text-black bg-light border-light-subtle'}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ marginRight: '2px', fontSize: '12px', }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        {renderContent()}

      </div>
    </div>
  );
};

export default TemplateSettingsScreen;
