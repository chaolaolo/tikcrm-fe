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
                <th className="fw-medium text-center align-middle" style={{ minWidth: 50 }}>ID</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Ngày upload</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Người upload</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Bank name</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Account number</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Routing number</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Swift code</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Region</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Ghi chú</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Tình trạng</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Shop</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Platform</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Ngày setup bank</th>
                <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Nhân sự</th>
                <th className="fw-medium text-center align-middle" style={{
                  minWidth: 120,
                  position: 'sticky',
                  right: 0,
                  zIndex: 10,
                  // boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.05)',
                }}>Actions</th>
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
