import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DateRangePicker from '../../components/ui/DatePicker/DateRangePicker';

const WarningSpaceReleaseScreen: React.FC = () => {

  const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
    console.log('Start:', start, 'End:', end);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Cảnh báo gian lận</h5>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-arrow-clockwise me-1"></i>Refresh
          </button>
        </div>
        {/* Divider */}
        <hr />
        {/* Filters */}
        <div className="row g-2 mb-3">
          <div className="col-md-4">
            <select className="form-select">
              <option>All Stores</option>
            </select>
          </div>
          <div className="col-md-4 text-start">
            <DateRangePicker onChange={handleDateChange} />
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table table-bordered text-center" style={{ minWidth: '1200px' }}>
            <thead className="table-light">
              <tr>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>ID</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Ngày phát hiện</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Seller</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Trạng thái</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Số tiền</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Payment ID</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Đơn hàng</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Ngày paid</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Bank account</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Bank get</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Ngày get bank</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Shop name</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Tên gợi nhớ</th>
                <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Shop code</th>
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
