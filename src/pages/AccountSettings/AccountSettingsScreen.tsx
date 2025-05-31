import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import MarketingTab from './Tabs/MarketingTab';
import ChangePasswordTab from './Tabs/ChangePasswordTab';
import NotificationTab from './Tabs/NotificationTab';
import AccountSettingsTab from './Tabs/AccountSettingsTab';
import { useTranslation } from 'react-i18next';

const AccountSettingsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();
  const tabs = [
    { id: 1, label: t('accountSettings.tabs.settings') },
    { id: 2, label: t('accountSettings.tabs.notifications') },
    { id: 3, label: t('accountSettings.tabs.changePassword') },
    { id: 4, label: t('accountSettings.tabs.referral') },

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
        <h5 className="mb-4 text-start">{t('accountSettings.title')}</h5>
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