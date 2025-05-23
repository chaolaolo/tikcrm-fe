import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductManagementScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        <h5 className="mb-4">Product List</h5>

        {/* Filters Row 1 */}
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Search by: Product Name, ID, Profile, Template Name" />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">Search</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-files me-1"></i>Clone Products
            </button>
          </div>
          <div className="col-md-2 text-end">
            <button className="btn btn-outline-info me-2">
              <i className="bi bi-cloud-arrow-down me-1"></i>Sync products
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
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
              <input type="date" className="form-control me-2" placeholder="Start date" />
              <input type="date" className="form-control" placeholder="End date" />
            </div>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="mb-3 d-flex gap-2 flex-wrap">
          <button className="btn btn-outline-primary btn-sm active">LIVE</button>
          <button className="btn btn-outline-dark btn-sm"><i className="bi bi-hourglass-split me-1"></i>REVIEWING</button>
          <button className="btn btn-outline-danger btn-sm"><i className="bi bi-x-circle me-1"></i>FAILED</button>
          <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-slash-circle me-1"></i>FROZEN</button>
          <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-trash me-1"></i>DELETED</button>
          <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-list me-1"></i>ALL</button>
        </div>

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
