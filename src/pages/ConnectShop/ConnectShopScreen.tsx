import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConnectShopScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-2 text-start">
        <h5 className="mb-2">Store list</h5>
        {/* Divider */}
        <hr />
        {/* Filter + Action Buttons */}
        <div className="d-flex flex-wrap gap-2 justify-content-end mb-3">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-download me-1"></i>Export (CSV)</button>
          <button className="btn btn-primary">
            <i className="bi bi-person-lines-fill me-1"></i>Transfer Staff</button>
          <button className="btn btn-primary">
            <i className="bi bi-shop-window me-1"></i>Import shop
          </button>
          <button className="btn btn-outline-primary">
            <i className="bi bi-arrow-clockwise me-1"></i>Refresh</button>
        </div>
        {/* Divider */}
        <hr />
        {/* Table */}
        <div className="row g-4 mb-4">
          <div className="input-group" style={{ maxWidth: '33.5%' }}>
            <input type="text" className="form-control" placeholder="Search by: Name, ID, Promotion, Template..." />
            <button className="btn btn-primary">Search</button>
          </div>

          <div className="col-md-3">
            <select className="form-select">
              <option>All Staff</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option>All Niches</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>Trạng thái dữ liệu KikiLogin</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>Trạng thái Proxy KikiLogin</option>
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th className="fw-medium text-center align-middle">No</th>
                <th className="fw-medium text-center align-middle">Shop Info</th>
                <th className="fw-medium text-center align-middle">API Type</th>
                <th className="fw-medium text-center align-middle">KikiLogin Sync Status</th>
                <th className="fw-medium text-center align-middle">Country</th>
                <th className="fw-medium text-center align-middle">Creation Date</th>
                <th className="fw-medium text-center align-middle">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="py-5 text-muted">
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

export default ConnectShopScreen;
