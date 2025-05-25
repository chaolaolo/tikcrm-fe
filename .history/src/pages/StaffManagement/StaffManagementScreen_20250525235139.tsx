import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StaffManagementScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        <h5 className="mb-4">Quản lý nhân viên</h5>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-primary active">Active</button>
            <button type="button" className="btn btn-outline-secondary">Inactive</button>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-primary">Thêm nhân viên</button>
            <button className="btn btn-outline-primary">Refresh</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Vai trò</th>
                <th>Xem đơn hàng của Team</th>
                <th>SKU Prefix</th>
                <th>Ngày tạo</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tranchaufw04@gmail.com</td>
                <td>chau</td>
                <td>tran</td>
                <td>Owner</td>
                <td><input type="checkbox" disabled /></td>
                <td>TRANCHAUFW04_ZMTW</td>
                <td>23/05/2025 23:33</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span>Total 1 products</span>
          <nav>
            <ul className="pagination mb-0">
              <li className="page-item active">
                <span className="page-link">1</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StaffManagementScreen;
