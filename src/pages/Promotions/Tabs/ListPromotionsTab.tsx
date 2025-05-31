import { type FC } from 'react'
import StatusMultiSelect from '../../../components/ui/StatusMultiSelect';

const ListPromotionsTab: FC = () => {

  return (
    <div className="container-fluid bg-white p-3 min-vh-100">
      {/* Search and Filter */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <input type="text" className="form-control" placeholder="Search by: Name, ID, Promotion, Template..." />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-end gap-1 mb-3 ">
        <div className='d-flex col-md-4 flex-wrap'>
          <StatusMultiSelect />
        </div>
        <div className='d-flex gap-2'>
          <button className="btn btn-primary" style={{ minWidth: '130px' }}>
            Đồng bộ promotion
          </button>
          <button className="btn btn-primary" style={{ minWidth: '130px' }}>
            <i className="bi bi-arrow-clockwise me-1"></i> Refresh
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive" style={{ overflowX: 'auto' }}>
        <table className="table table-bordered align-middle text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Thông tin cửa hàng</th>
              <th className="fw-medium text-center align-middle" style={{ minWidth: 200 }}>Promotion name</th>
              <th className="fw-medium text-center align-middle" style={{ minWidth: 200 }}>Loại</th>
              <th className="fw-medium text-center align-middle align-items-end" style={{ minWidth: 150 }}>Số lượng sản phẩm
                <i className='bi bi-question-circle ms-1'></i>
              </th>
              <th className="fw-medium text-center align-middle" style={{ minWidth: 120 }}>Trạng thái
                <i className='bi bi-question-circle ms-1'></i>
              </th>
              <th className="fw-medium text-center align-middle" style={{ minWidth: 180 }}>Ngày bắt đầu<br />(TZ: America/Los_Angeles)</th>
              <th className="fw-medium text-center align-middle" style={{ minWidth: 180 }}>Ngày kết thúc<br />(TZ: America/Los_Angeles)</th>
              <th className="fw-medium text-center align-middle" style={{ minWidth: 180 }}>Bật/Tắt</th>
              <th className="sticky-action-column fw-medium text-center align-middle" style={{
                minWidth: 120,
                position: 'sticky',
                right: 0,
                zIndex: 2,
                boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.05)',
              }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="py-5 text-muted">
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                  <div>No data</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default ListPromotionsTab