import React, { type FC } from 'react'
import DateRangePicker from '../../../components/ui/DatePicker/DateRangePicker';
import { useTranslation } from 'react-i18next';

const ScheduledListTab: FC = () => {
  const { t } = useTranslation();

  const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
    console.log('Start:', start, 'End:', end);
  };


  return (
    <div className="container-fluid bg-white p-3 min-vh-100">
      {/* Search and Filter */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <input type="text" className="form-control" placeholder={t('products.searchPlaceholder')} />
          <button className="btn btn-primary">{t('products.search')}</button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-end gap-1 mb-3 ">
        <div className='d-flex gap-2 flex-wrap'>
          <select className="form-select col-md" >
            <option>{t('autoListing.filter.store')}</option>
          </select>
          <div>
            <DateRangePicker onChange={handleDateChange} />
          </div>
        </div>
        <button className="btn btn-primary" style={{ minWidth: '130px' }}>
          <i className="bi bi-arrow-clockwise me-1"></i> {t('autoListing.actions.refresh')}
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive" style={{ overflowX: 'auto' }}>
        <table className="table table-bordered align-middle text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="fw-medium" style={{ minWidth: 150 }}>{t('autoListing.table.preview')}</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>{t('autoListing.table.productInfo')}</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>{t('autoListing.table.name')}</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>{t('autoListing.table.retailPrice')}</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>{t('autoListing.table.status')}</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>{t('autoListing.table.scheduleTime')}</th>
              <th className="fw-medium" style={{ minWidth: 200 }}>{t('autoListing.table.creationDate')}</th>
              <th className="sticky-action-column fw-medium" style={{
                minWidth: 120,
                position: 'sticky',
                right: 0,
                zIndex: 2,
                boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.05)',
              }}>{t('autoListing.table.action')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="py-5 text-muted">
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                  <div>{t('autoListing.table.noData')}</div>
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