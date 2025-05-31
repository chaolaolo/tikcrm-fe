import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PublishProductTab from './Tabs/PublishProductTab';
import DraftTab from './Tabs/DraftTab';
import ScheduledListTab from './Tabs/ScheduledListTab';
import ProductPublishingProgressTab from './Tabs/ProductPublishingProgressTab';
import { useTranslation } from 'react-i18next';

interface AutoListingScreenProps {
  isCollapsed: boolean;
}

const AutoListingScreen: React.FC<AutoListingScreenProps> = ({ isCollapsed }) => {
  const [activeTab, setActiveTab] = useState(1);
  const {t} = useTranslation();

  const tabs = [
    { id: 1, label: t('autoListing.tabs.publish') },
    { id: 2, label: t('autoListing.tabs.draft') },
    { id: 3, label: t('autoListing.tabs.scheduled') },
    { id: 4, label: t('autoListing.tabs.progress') },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <PublishProductTab isCollapsed={isCollapsed} />;;
      case 2:
        return <DraftTab />;
      case 3:
        return <ScheduledListTab/>;
      case 4:
        return <ProductPublishingProgressTab/>;
      default:
        return null;
    }
  };


  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">
        <h5 className="mb-2 text-start">{t('autoListing.title')}</h5>
        {/* Divider */}
        <hr />
        {/* Tabs */}
        {/* Status Tabs */}
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

        {renderContent()}

      </div>
    </div>
  );
};

export default AutoListingScreen;
