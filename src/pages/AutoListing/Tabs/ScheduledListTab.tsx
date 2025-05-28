import React, { type FC } from 'react'
import DateRangePicker from '../../../components/ui/DatePicker/DateRangePicker';

const ScheduledListTab: FC = () => {
  const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
    console.log('Start:', start, 'End:', end);
  };


  return (
    <div className="container-fluid bg-white p-3 min-vh-100">
      {/* Search and Filter */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <input type="text" className="form-control" placeholder="Search by: Product Name, ID, ..." />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-end gap-1 mb-3 ">
        <div className='d-flex gap-2 flex-wrap'>
          <select className="form-select col-md" >
            <option>All Stores</option>
          </select>
          <div>
            <DateRangePicker onChange={handleDateChange} />
          </div>
        </div>
        <button className="btn btn-primary" style={{ minWidth: '130px' }}>
          <i className="bi bi-arrow-clockwise me-1"></i> Refresh
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive" style={{ overflowX: 'auto' }}>
        <table className="table table-bordered align-middle text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="fw-medium" style={{ minWidth: 150 }}>Preview Image</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>Product Information</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>Product Name/Description</th>
              <th className="fw-medium" style={{ minWidth: 150 }}>Retail Price</th>
              <th className="fw-medium" style={{ minWidth: 120 }}>Status</th>
              <th className="fw-medium" style={{ minWidth: 180 }}>Schedule time<br />(TZ: America/Los_Angeles)</th>
              <th className="fw-medium" style={{ minWidth: 180 }}>Creation Date</th>
              <th className="sticky-action-column fw-medium" style={{
                minWidth: 120,
                position: 'sticky',
                right: 0,
                zIndex: 2,
                boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.05)',
              }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="py-5 text-muted">
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                  <div>No data</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default ScheduledListTab