
const Description1ConfigTab = () => {
  return (
    <div>
      <div className="d-flex justify-content-end align-items-center mb-3">
        <div>
          <button className="btn btn-outline-primary me-2">
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
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th className="fw-medium text-center align-middle">Vị trí</th>
              <th className="fw-medium text-center align-middle">Name</th>
              <th className="fw-medium text-center align-middle">Nội dung</th>
              <th className="fw-medium text-center align-middle">Cấu hình mặc định</th>
              <th className="fw-medium text-center align-middle">Ngày tạo</th>
              <th className="fw-medium text-center align-middle"
                style={{
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
              <td colSpan={6} className="py-5 text-muted">
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

export default Description1ConfigTab