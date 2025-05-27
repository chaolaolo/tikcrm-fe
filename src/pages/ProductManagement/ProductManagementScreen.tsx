import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductManagementScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('LIVE');

  const tabs = [
    { label: 'LIVE', icon: 'bi-check-circle' },
    { label: 'REVIEWING', icon: 'bi-hourglass' },
    { label: 'FAILED', icon: 'bi-x-circle' },
    { label: 'FROZEN', icon: 'bi-slash-circle' },
    { label: 'DELETED', icon: 'bi-trash' },
    { label: 'ALL', icon: 'bi-list' },
  ];



  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3 text-start">
        <div className="row g-2 mb-3 align-items-center">
          <div className="col-md-6">
            <h5 className="mb-4">Product List</h5>
          </div>
          <div className="col-md-3 text-end">
            <button className="btn btn-outline-info w-100">
              <i className="bi bi-cloud-arrow-down me-1"></i>Sync products
            </button>
          </div>
          <div className="col-md-3 text-end">
            <button className="btn btn-outline-secondary w-100">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr />

        {/* Filters Row 1 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-start"
                placeholder="Search by: Product Name, ID, Profile, Template Name"
              />
              <button className="btn btn-primary rounded-end px-4" type="button">
                Search
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-files me-1"></i>Clone Products
            </button>
          </div>
        </div>

        {/* Filters Row 2 */}
        <div className="row g-2 mb-3">
          <div className="col-md-3">
            <select className="form-select">
              <option>All Stores</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option>All Staff</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option>Filter by Listing Quality</option>
            </select>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <input type="date" className="form-control" placeholder="Start date" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <input type="date" className="form-control" placeholder="End date" />
            </div>
          </div>
        </div>

        {/* Status Tabs */}
        <ul className="nav nav-tabs mb-2">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.label}>
              <button
                className={`nav-link ${activeTab === tab.label ? 'active text-primary' : 'text-black bg-light border-light-subtle'}`}
                onClick={() => setActiveTab(tab.label)}
                style={{marginRight: '2px'}}
              >
                <i
                  className={`bi ${tab.icon} me-2 ${activeTab === tab.label ? 'text-primary' : 'text-black'}`}
                  style={{ width: '20px' }}
                ></i>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Product Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-light">
              <tr>
                <th><input type="checkbox" /></th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Retail Price</th>
                <th>
                  Listing Quality <i className="bi bi-question-circle" title="Listing Quality Info"></i>
                </th>
                <th>
                  Status <i className="bi bi-question-circle" title="Status Info"></i>
                </th>
                <th>Creation Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                    <div>No data</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementScreen;
