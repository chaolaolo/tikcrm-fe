import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../OrderManagementScreen/OrderManagementScreen';
import Settings from './Settings';

const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <nav style={{ width: '200px', borderRight: '1px solid #ccc' }}>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>

      {/* Content */}
      <div style={{ padding: '20px', flex: 1 }}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
