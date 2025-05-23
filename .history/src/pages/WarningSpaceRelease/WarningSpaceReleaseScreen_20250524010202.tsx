import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WarningSpaceReleaseScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Cảnh báo gian lận</h5>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-arrow-clockwise me-1"></i>Refresh
          </button>
        </div>

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
          <table className="table table-bordered text-center" style={{ minWidth: '1200px' }}>
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Ngày phát hiện</th>
                <th>Seller</th>
                <th>Trạng thái</th>
                <th>Số tiền</th>
                <th>Payment ID</th>
                <th>Đơn hàng</th>
                <th>Ngày paid</th>
                <th>Bank account</th>
                <th>Bank get</th>
                <th>Ngày get bank</th>
                <th>Shop name</th>
                <th>Tên gợi nhớ</th>
                <th>Shop code</th>
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

export default WarningSpaceReleaseScreen;
