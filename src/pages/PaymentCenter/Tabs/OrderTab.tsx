import React from 'react'

const OrderTab = () => {
    return (
            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Dịch vụ</th>
                            <th>Số tiền</th>
                            <th>Gói cũ</th>
                            <th>Gói mới</th>
                            <th>Thời gian</th>
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