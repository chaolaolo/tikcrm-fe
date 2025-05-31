import React, { useState } from 'react';
import DateRangePicker from '../../components/ui/DatePicker/DateRangePicker';
import { useTranslation } from 'react-i18next';
import AutoFulfillModal from './Component/AutoFulfill/AutoFulfillModal';
import ExportOrderModal from './Component/ExportOrder/ExportOrderModal';


const OrderManagementScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const { t } = useTranslation();
  const [showAutoFulfill, setShowAutoFulfill] = useState(false);
  const [showExportOder, setShowExportOder] = useState(false);

  const tabLabels = [
    t('orders.tabs.withoutDesign'),
    t('orders.tabs.withDesign'),
    t('orders.tabs.overdue'),
    t('orders.tabs.suspicious'),
    t('orders.tabs.returned'),
  ];

  const handleTabClick = (label: string) => {
    setActiveTab((prev) => (prev === label ? null : label));
  };

  const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
    console.log('Start:', start, 'End:', end);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{t('orders.title')}</h2>
        <div className="d-flex gap-2">
          <button
            onClick={() => setShowAutoFulfill(true)}
            className="btn btn-primary">
            <i className="bi bi-lightning-fill me-2"></i>
            {t('orders.actions.autoFulfill')}
          </button>
          <button
            onClick={() => setShowExportOder(true)} className="btn btn-primary">
            <i className="bi bi-download me-2"></i>
            {t('orders.actions.export')}
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-arrow-repeat me-2"></i>
            {t('orders.actions.sync')}
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-arrow-clockwise me-2"></i>
            {t('orders.actions.refresh')}
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Order Status Tabs */}
      <div className="mb-4 d-flex flex-wrap gap-2">
        {tabLabels.map((label) => (
          <button
            key={label}
            className={`btn rounded-3 px-3 py-2 fw-medium tab-button 
              ${activeTab === label ? 'btn-primary text-white' : 'btn-outline-light text-dark'}`}
            onClick={() => handleTabClick(label)}
          >
            {label}
          </button>
        ))}
      </div>


      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-3">
          <input type="text" className="form-control" placeholder={t('orders.filters.orderId')} />
        </div>
        <div className="col-12 col-md-3">
          <input type="text" className="form-control" placeholder={t('orders.filters.productId')} />
        </div>
        <div className="col-12 col-md-3">
          <input type="text" className="form-control" placeholder={t('orders.filters.productName')} />
        </div>
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>{t('orders.filters.allStores')}</option>
          </select>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>{t('orders.filters.allStaff')}</option>
          </select>
        </div>
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>{t('orders.filters.allServices')}</option>
          </select>
        </div>
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>{t('orders.filters.allStatuses')}</option>
          </select>
        </div>
        <div className="col-12 col-md-3">
          <DateRangePicker onChange={handleDateChange} />
        </div>
      </div>

      {/* Orders Table */}
      <div className="table-responsive" style={{ position: 'relative' }}>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th className="fw-medium text-center align-middle" >{t('orders.table.id')}</th>
              <th className="fw-medium text-center align-middle" >{t('orders.table.account')}</th>
              <th className="fw-medium text-center align-middle" >{t('orders.table.order')}</th>
              <th className="fw-medium text-center align-middle" >{t('orders.table.info')}</th>
              <th className="fw-medium text-center align-middle" >{t('orders.table.price')}</th>
              <th className="fw-medium text-center align-middle" style={{
                width: '120px',
                position: 'sticky',
                right: 0,
                zIndex: 0,
                boxShadow: '-6px 0 6px -2px rgba(0,0,0,0.15)',
              }} >{t('orders.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} className="py-5 text-muted">
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                  <div>{t('orders.table.noData')}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AutoFulfillModal */}
      <AutoFulfillModal show={showAutoFulfill} onClose={() => setShowAutoFulfill(false)} />
      <ExportOrderModal show={showExportOder} onClose={() => setShowExportOder(false)} />

    </div>
  );
};

export default OrderManagementScreen;
