import React from 'react'

const OrderDetailsTab = () => {
    return (
        <div>
            {/* Filters */}
            <div className="row g-2 mb-3">
                <div className="col-md-4">
                    <select className="form-select">
                        <option>All Stores</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="date" className="form-control" placeholder="Start date" />
                </div>
                <div className="col-md-4">
                    <input type="date" className="form-control" placeholder="End date" />
                </div>
            </div>

            {/* Scrollable Table */}
            <div className="table-responsive" style={{ overflowX: 'auto' }}>
                <table className="table table-bordered text-center" style={{ minWidth: '1400px' }}>
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Statement date (UTC)</th>
                            <th>Statement ID</th>
                            <th>Payment ID</th>
                            <th>Status</th>
                            <th>Currency</th>
                            <th>Type</th>
                            <th>Order/adjustment ID</th>
                            <th>Order status</th>
                            <th>Total settlement amount</th>
                            <th>Shop code</th>
                            <th>Shop name</th>
                            <th>Suggest name</th>
                            <th>Name Seller</th>
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
    )
}

export default OrderDetailsTab