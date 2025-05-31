import { type FC } from 'react'

const RechargeHistoryTab: FC = () => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center align-middle">
        <thead className="table-light">
          <tr>
            <th className="fw-medium text-center align-middle" style={{width:'15%'}}>Số tiền</th>
            <th className="fw-medium text-center align-middle" style={{width:'60%'}}>Ghi chú</th>
            <th className="fw-medium text-center align-middle" style={{width:'25%'}}>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className="py-5 text-muted">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                <div>No data</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RechargeHistoryTab