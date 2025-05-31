

const InactiveTab = () => {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              <th className="fw-medium text-center align-middle">Email</th>
              <th className="fw-medium text-center align-middle">First Name</th>
              <th className="fw-medium text-center align-middle">Last Name</th>
              <th className="fw-medium text-center align-middle">Vai trò</th>
              <th className="fw-medium text-center align-middle">Xem đơn hàng của Team</th>
              <th className="fw-medium text-center align-middle">SKU Prefix</th>
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

export default InactiveTab