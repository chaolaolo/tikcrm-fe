import { type FC } from 'react'

const StatementsTab: FC = () => {

  return (
    <div>
      {/* Scrollable Table */}
      <div className="table-responsive" style={{ overflowX: 'auto' }}>
        <table className="table table-bordered text-center" style={{ minWidth: '1400px' }}>
          <thead className="table-light">
            <tr>
              <th className='fw-medium text-center align-middle'>#</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Statement date (UTC)</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Statement ID</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Payment ID</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Status</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Total settlement amount</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Net sales amount</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Shipping</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Fees</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Adjustment</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Reserve Amount</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Shop name</th>
              <th className='fw-medium text-center align-middle' style={{ fontSize: '14px' }}>Payable amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={13} className="py-5 text-muted">
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

export default StatementsTab