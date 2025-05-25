import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentCenterScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="bg-dark text-white p-4 rounded">
            <h5 className="mb-1">Thông tin gói cước</h5>
            <h2 className="fw-bold">Free</h2>
            <div className="d-flex align-items-center gap-2 mt-3">
              <button className="btn btn-outline-light">Nâng cấp</button>
              <button className="btn btn-warning text-white">Gia hạn</button>
              <span className="ms-auto small">
                <i className="bi bi-credit-card-2-back"></i> 0/8
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-white border rounded p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <h6>Thông tin ví chính</h6>
              <h2 className="fw-bold">$$0</h2>
              <p className="text-muted small mb-3">≈ $0d</p>
            </div>
            <div>
              <button className="btn btn-primary">Nạp tiền</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded p-3">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">Đơn hàng</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Lịch sử nạp tiền</a>
          </li>
        </ul>

        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Dịch vụ</th>
                <th>Số tiền</th>
                <th>Gói cũ</th>
                <th>Gói mới</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="py-5 text-muted">
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

export default PaymentCenterScreen;
