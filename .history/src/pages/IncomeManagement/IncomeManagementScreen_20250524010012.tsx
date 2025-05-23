import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const IncomeManagementScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Quản lý tiền về</h5>
          <div>
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-cloud-download me-1"></i>Export paid history
            </button>
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-cloud-sync me-1"></i>Sync tiktok shop finance
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">Order details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Statements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Payments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reserve details</a>
          </li>
        </ul>

        {/* Filters */}
        <div className="row g-2 mb-3">
          <div className="col-md-4">
            <select className="form-select">
              <option>All Stores</option>
            </select>
          </div>
          <div className="col-md-4">
            <input type="date" className="form-control" placeholder="Start date" />
          </div>
          <div className="col-md-4">
            <input type="date" className="form-control" placeholder="End date" />
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table table-bordered text-center" style={{ minWidth: '1400px' }}>
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Statement date (UTC)</th>
                <th>Statement ID</th>
                <th>Payment ID</th>
                <th>Status</th>
                <th>Currency</th>
                <th>Type</th>
                <th>Order/adjustment ID</th>
                <th>Order status</th>
                <th>Total settlement amount</th>
                <th>Shop code</th>
                <th>Shop name</th>
                <th>Suggest name</th>
                <th>Name Seller</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={14} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
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

export default IncomeManagementScreen;

