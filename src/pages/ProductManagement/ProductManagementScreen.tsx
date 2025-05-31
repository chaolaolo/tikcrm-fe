import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DateRangePicker from '../../components/ui/DatePicker/DateRangePicker';
import { useTranslation } from 'react-i18next';

const ProductManagementScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();

  const tabs = [
    { id: 1, label: t('products.statuses.live'), icon: 'bi-check-circle' },
    { id: 2, label: t('products.statuses.reviewing'), icon: 'bi-hourglass' },
    { id: 3, label: t('products.statuses.failed'), icon: 'bi-x-circle' },
    { id: 4, label: t('products.statuses.frozen'), icon: 'bi-slash-circle' },
    { id: 5, label: t('products.statuses.deleted'), icon: 'bi-trash' },
    { id: 6, label: t('products.statuses.all'), icon: 'bi-list' },
  ];

  const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
    console.log('Start:', start, 'End:', end);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3 text-start">
        <div className="row g-2 mb-3 align-items-center">
          <div className="col-md-6">
            <h5 className="mb-4">{t('products.title')}</h5>
          </div>
          <div className="col-md-3 text-end">
            <button className="btn btn-outline-info w-100">
              <i className="bi bi-cloud-arrow-down me-1"></i>{t('products.sync')}
            </button>
          </div>
          <div className="col-md-3 text-end">
            <button className="btn btn-outline-secondary w-100">
              <i className="bi bi-arrow-clockwise me-1"></i>{t('products.refresh')}
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr />

        {/* Filters Row 1 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-start"
                placeholder="Search by: Product Name, ID, Profile, Template Name"
              />
              <button className="btn btn-primary rounded-end px-4" type="button">
                {t('products.search')}
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-files me-1"></i>{t('products.clone')}
            </button>
          </div>
        </div>

        {/* Filters Row 2 */}
        <div className="d-flex gap-2 mb-3">
          <div className="col-md-3">
            <select className="form-select">
              <option>{t('products.filters.allStores')}</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option>{t('products.filters.allStaff')}</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option>{t('products.filters.listingQuality')}</option>
            </select>
          </div>
          <div col-md-3>
            <DateRangePicker onChange={handleDateChange} />
          </div>
        </div>

        {/* Status Tabs */}
        <ul className="nav nav-tabs mb-2">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.label}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active text-primary' : 'text-black bg-light border-light-subtle'}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ marginRight: '2px' }}
              >
                <i
                  className={`bi ${tab.icon} me-2 ${activeTab === tab.id ? 'text-primary' : 'text-black'}`}
                  style={{ width: '20px' }}
                ></i>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Product Table */}
        <div className="table-responsive" style={{ position: 'relative' }}>
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th><input type="checkbox" /></th>
                <th className="fw-medium text-center align-middle" style={{ width: '100px' }}>{t('products.table.image')}</th>
                <th className="fw-medium text-center align-middle" style={{ width: '100px' }}>{t('products.table.name')}</th>
                <th className="fw-medium text-center align-middle" style={{ width: '100px' }}>{t('products.table.retailPrice')}</th>
                <th className="fw-medium text-center align-middle" style={{ width: '100px' }}>{t('products.table.listingQuality')}<i className="bi bi-question-circle" title="Listing Quality Info"></i></th>
                <th className="fw-medium text-center align-middle" style={{ width: '100px' }}>{t('products.table.status')}<i className="bi bi-question-circle" title="Status Info"></i></th>
                <th className="fw-medium text-center align-middle" style={{ width: '100px' }}>{t('products.table.creationDate')}</th>
                <th className="fw-medium text-center align-middle" style={{
                  width: '120px',
                  position: 'sticky',
                  right: 0,
                  zIndex: 0,
                  boxShadow: '-6px 0 6px -2px rgba(0,0,0,0.15)',
                }} >{t('products.table.actions')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                    <div>{t('products.table.noData')}</div>
                  </div>
                </td>
                {/* <td><input type="checkbox" /></td>
                <td>Image</td>
                <td>Sample Product</td>
                <td>$10</td>
                <td>Good</td>
                <td>Active</td>
                <td>2025-05-27</td>
                <td className="sticky-actions">
                  <button className="btn btn-sm btn-primary">Edit</button>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default ProductManagementScreen;
