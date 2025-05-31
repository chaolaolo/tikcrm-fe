import { type FC } from 'react'

const OrderTab: FC = () => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                    <tr>
                        <th className="fw-medium text-center align-middle">Dịch vụ</th>
                        <th className="fw-medium text-center align-middle">Số tiền</th>
                        <th className="fw-medium text-center align-middle">Gói cũ</th>
                        <th className="fw-medium text-center align-middle">Gói mới</th>
                        <th className="fw-medium text-center align-middle">Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={5} className="py-5 text-muted">
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

export default OrderTab