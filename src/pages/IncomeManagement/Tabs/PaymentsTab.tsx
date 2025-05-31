import { type FC } from 'react'

const PaymentsTab: FC = () => {

  return (
    <div>
      {/* Scrollable Table */}
      <div className="table-responsive" style={{ overflowX: 'auto' }}>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th className='fw-medium text-center align-middle'>#</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Payment initiation date (UTC)</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Payment ID</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Payment amount</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Payment completion date (UTC)</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Status</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Bank amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="py-5 text-muted">
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

export default PaymentsTab