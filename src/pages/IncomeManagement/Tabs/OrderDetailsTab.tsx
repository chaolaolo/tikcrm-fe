import React, { type FC } from 'react'
import DateRangePicker from '../../../components/ui/DatePicker/DateRangePicker'

const OrderDetailsTab: FC = () => {
    const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
        console.log('Start:', start, 'End:', end);
    };


    return (
        <div>
            {/* Filters */}
            <div className="row g-1 mb-3">
                <div className="col-md-4">
                    <select className="form-select">
                        <option>All Stores</option>
                    </select>
                </div>
                <div className="col-md-4 text-start">
                    <DateRangePicker onChange={handleDateChange}/>
                </div>
            </div>

            {/* Scrollable Table */}
            <div className="table-responsive" style={{ overflowX: 'auto' }}>
                <table className="table table-bordered text-center" style={{ minWidth: '1400px' }}>
                    <thead className="table-light">
                        <tr>
                            <th className='fw-medium text-center align-middle'>#</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Statement date (UTC)</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Statement ID</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Payment ID</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Status</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Currency</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Type</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Order/adjustment ID</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Order status</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Total settlement amount</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Shop code</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Shop name</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Suggest name</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Name Seller</th>
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