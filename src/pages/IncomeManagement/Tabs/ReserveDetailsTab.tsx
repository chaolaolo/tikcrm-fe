import React, { type FC } from 'react'
import DateRangePicker from '../../../components/ui/DatePicker/DateRangePicker'

const ReserveDetailsTab: FC = () => {
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
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Reserve transaction ID</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Reserve amount</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Status</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Associated order ID</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Expected release time</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Payout ID</th>
                            <th className='fw-medium text-center align-middle' style={{fontSize:'14px'}}>Payout completion date (UTC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={10} className="py-5 text-muted">
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

export default ReserveDetailsTab