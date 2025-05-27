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
          <button className="btn btn-outline-secondary">Export (CSV)</button>
          <button className="btn btn-primary">Transfer Staff</button>
          <button className="btn btn-primary">
            <i className="bi bi-upload me-1"></i>Import shop
          </button>
          <button className="btn btn-outline-primary">Refresh</button>
        </div>
        {/* Divider */}
        <hr />
        {/* Table */}
        <div className="row g-2 mb-4">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Search by: Store Name, Profile" />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">Search</button>
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>All Staff</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>All Niches</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>Trạng thái dữ liệu KikiLogin</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>Trạng thái Proxy KikiLogin</option>
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>No</th>
                <th>Shop Info</th>
                <th>API Type</th>
                <th>KikiLogin Sync Status</th>
                <th>Country</th>
                <th>Creation Date</th>
                <th>Actions</th>
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
