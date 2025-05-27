import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PublishProductTab from './Tabs/PublishProductTab';
import DraftTab from './Tabs/DraftTab';
import ScheduledListTab from './Tabs/ScheduledListTab';
import ProductPublishingProgressTab from './Tabs/ProductPublishingProgressTab';

const AutoListingScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Publish Product');

  const tabs = [
    { label: 'Publish Product' },
    { label: 'Draft' },
    { label: 'Scheduled List' },
    { label: 'Product Publishing Progress' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Publish Product':
        return PublishProductTab();
      case 'Draft':
        return DraftTab();
      case 'Scheduled List':
        return ScheduledListTab();
      case 'Product Publishing Progress':
        return ProductPublishingProgressTab();
      default:
        return null;
    }
  };


  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">
        <h5 className="mb-2 text-start">Schedule Products</h5>
        {/* Divider */}
        <hr />
        {/* Tabs */}
        {/* Status Tabs */}
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

export default AutoListingScreen;
