import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TemplateSettingsScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Cài đặt Template</h5>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
            <button className="btn btn-outline-primary me-2">
              Export
            </button>
            <button className="btn btn-primary">
              Thêm cấu hình
            </button>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">Nhóm cấu hình</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cấu hình Category</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cấu hình SKU</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cấu hình Description 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cấu hình Description 2 (TOP-BOTTOM)</a>
          </li>
        </ul>

        {/* Scrollable Table */}
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table table-bordered text-center" style={{ minWidth: '1200px' }}>
            <thead className="table-light">
              <tr>
                <th>Vị trí</th>
                <th>Name</th>
                <th>Category Template</th>
                <th>SKU Template</th>
                <th>Description Template</th>
                <th>DropShip Description Template</th>
                <th>Ngày tạo</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="py-5 text-muted">
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

export default TemplateSettingsScreen;
