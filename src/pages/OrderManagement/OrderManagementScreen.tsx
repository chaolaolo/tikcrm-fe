import React, { useState } from 'react';
import Layout from '../Layouts/Layout';
import './OrderTabs/OrderTabs.css';
import DateRangePicker from '../../components/ui/DatePicker/DateRangePicker';


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

  const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
    console.log('Start:', start, 'End:', end);
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
          <DateRangePicker onChange={handleDateChange} />
        </div>
      </div>

      {/* Orders Table */}
      <div className="table-responsive" style={{ position: 'relative' }}>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th className="fw-medium text-center align-middle" >ID</th>
              <th className="fw-medium text-center align-middle" >Account / Seller</th>
              <th className="fw-medium text-center align-middle" >Order</th>
              <th className="fw-medium text-center align-middle" >Order info</th>
              <th className="fw-medium text-center align-middle" >Price</th>
              <th className="fw-medium text-center align-middle" style={{
                width: '120px',
                position: 'sticky',
                right: 0,
                zIndex: 0,
                boxShadow: '-6px 0 6px -2px rgba(0,0,0,0.15)',
              }} >Actions</th>
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
  );
};

export default OrderManagementScreen;
