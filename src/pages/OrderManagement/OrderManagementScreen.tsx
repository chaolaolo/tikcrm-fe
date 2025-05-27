import React, { useState } from 'react';
import Layout from '../Layouts/Layout';
import './OrderTabs/OrderTabs.css';


const tabLabels = [
  'Orders Without Design',
  'Orders With Design (Not Yet Fulfilled)',
  'Overdue Orders',
  'Suspicious Orders',
  'Returned Orders'
];

const OrderManagementScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (label: string) => {
    setActiveTab((prev) => (prev === label ? null : label));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Orders</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-primary">
            <i className="bi bi-lightning-fill me-2"></i>
            Auto Fulfill
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-download me-2"></i>
            Export order
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-arrow-repeat me-2"></i>
            Sync order
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-arrow-clockwise me-2"></i>
            Refresh
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Order Status Tabs */}
      <div className="mb-4 d-flex flex-wrap gap-2">
        {tabLabels.map((label) => (
          <button
            key={label}
            className={`btn rounded-3 px-3 py-2 fw-medium tab-button 
              ${activeTab === label ? 'btn-primary text-white' : 'btn-outline-light text-dark'}`}
            onClick={() => handleTabClick(label)}
          >
            {label}
          </button>
        ))}
      </div>


      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-3">
          <input type="text" className="form-control" placeholder="Search order id" />
        </div>
        <div className="col-12 col-md-3">
          <input type="text" className="form-control" placeholder="Search product id" />
        </div>
        <div className="col-12 col-md-3">
          <input type="text" className="form-control" placeholder="Search product name" />
        </div>
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>All Stores</option>
          </select>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>All Staff</option>
          </select>
        </div>
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>All Services</option>
          </select>
        </div>
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>All Statuses</option>
          </select>
        </div>
        <div className="col-12 col-md-3">
          <input type="date" className="form-control" placeholder="Start date" />
        </div>
        <div className="col-12 col-md-3">
          <input type="date" className="form-control" placeholder="End date" />
        </div>
        {/* <div className="col-6">
          <div className="row g-2">
            <div className="col-6">
              <input type="date" className="form-control" placeholder="Start date" />
            </div>
            <div className="col-6">
              <input type="date" className="form-control" placeholder="End date" />
            </div>
          </div>
        </div> */}
      </div>

      {/* Orders Table */}
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Account / Seller</th>
                <th>Order</th>
                <th>Order info</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="text-center py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                    <span>No data</span>
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

export default OrderManagementScreen;
