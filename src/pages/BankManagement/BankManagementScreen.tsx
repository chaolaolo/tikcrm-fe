import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const BankManagementScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3 text-start">
        <div className="row g-3 align-items-center mb-3">
          <div className="col-md-6 text-start">
          <h5 className="mb-4">Quản Lý Bank Account</h5>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-box-arrow-up me-1"></i>Export bank
            </button>
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-box-arrow-in-down me-1"></i>Import bank
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
          </div>
        </div>
        {/* Divider */}
        <hr />
        {/* Filter + Action Buttons */}
        <div className="row g-2 align-items-center mb-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Search anythings" />
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>Trạng thái</option>
            </select>
          </div>
        </div>

        {/* Bank Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Ngày upload</th>
                <th>Người upload</th>
                <th>Bank name</th>
                <th>Account number</th>
                <th>Routing number</th>
                <th>Swift code</th>
                <th>Region</th>
                <th>Ghi chú</th>
                <th>Tình trạng</th>
                <th>Shop</th>
                <th>Platform</th>
                <th>Ngày setup bank</th>
                <th>Nhân sự</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={15} className="py-5 text-muted">
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

export default BankManagementScreen;
