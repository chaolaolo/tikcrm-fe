import React from 'react'

const ConfigurationGroupTab = () => {
  return (
    <div>
      <div className="d-flex justify-content-end align-items-center mb-3">
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
  )
}

export default ConfigurationGroupTab