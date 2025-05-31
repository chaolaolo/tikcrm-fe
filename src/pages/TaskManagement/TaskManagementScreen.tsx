import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

const TaskManagementScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">{t('taskManagement.title')}</h5>
          <div>
            <button className="btn btn-primary me-2">{t('taskManagement.actions.create')}</button>
            <button className="btn btn-outline-primary">
              <i className="bi bi-arrow-clockwise me-1"></i>{t('taskManagement.actions.refresh')}
            </button>
          </div>
        </div>
        {/* Divider */}
        <hr />
        {/* Task Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th className='fw-medium text-center align-middle'>{t('taskManagement.table.name')}</th>
                <th className='fw-medium text-center align-middle'>{t('taskManagement.table.status')}</th>
                <th className='fw-medium text-center align-middle'>{t('taskManagement.table.schedule')}</th>
                <th className='fw-medium text-center align-middle'>{t('taskManagement.table.lastRun')}</th>
                <th className='fw-medium text-center align-middle'>{t('taskManagement.table.nextRun')}</th>
                <th className='fw-medium text-center align-middle'>{t('taskManagement.table.task')}</th>
                <th className='fw-medium text-center align-middle'>{t('taskManagement.table.creationDate')}</th>
                <th
                  className="fw-medium text-center align-middle" style={{
                    width: '120px',
                    position: 'sticky',
                    right: 0,
                    zIndex: 0,
                    boxShadow: '-6px 0 6px -2px rgba(0,0,0,0.15)',
                  }}>{t('taskManagement.table.actions')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
                    <div>{t('taskManagement.table.noData')}</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementScreen;
