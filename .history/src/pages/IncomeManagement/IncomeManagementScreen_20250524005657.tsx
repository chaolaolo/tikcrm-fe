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
              <i className="bi bi-cloud-download me-1"></i>Xuất lịch sử thanh toán
            </button>
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-cloud-sync me-1"></i>Đồng bộ tài chính cửa hàng tiktok
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-arrow-clockwise me-1"></i>Làm cho khỏe lại
            </button>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">Chi tiết đơn hàng</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Các tuyên bố</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Thanh toán</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Chi tiết dự trữ</a>
          </li>
        </ul>

        {/* Filters */}
        <div className="row g-2 mb-3">
          <div className="col-md-4">
            <select className="form-select">
              <option>Tất cả các cửa hàng</option>
            </select>
          </div>
          <div className="col-md-4">
            <input type="date" className="form-control" placeholder="Ngày bắt đầu" />
          </div>
          <div className="col-md-4">
            <input type="date" className="form-control" placeholder="Ngày kết thúc" />
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Ngày báo cáo (UTC)</th>
                <th>Mã số báo cáo</th>
                <th>Mã số thanh toán</th>
                <th>Trạng thái</th>
                <th>Tiền tệ</th>
                <th>Kiểu</th>
                <th>Mã lệnh/điều chỉnh</th>
                <th>Trạng thái đơn hàng</th>
                <th>Tổng số tiền thanh toán</th>
                <th>Mã cửa hàng</th>
                <th>Tên cửa hàng</th>
                <th>Đề xuất tên</th>
                <th>Tên người bán</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={14} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
                    <div>Không có dữ liệu</div>
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
