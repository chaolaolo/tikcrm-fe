import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface AutoFulfillModalProps {
  show: boolean;
  onClose: () => void;
}

const AutoFulfillModal: React.FC<AutoFulfillModalProps> = ({ show, onClose }) => {
  const { t } = useTranslation();

  const steps = [
    t('autoFulfill.step1'),
    t('autoFulfill.step2'),
    t('autoFulfill.step3'),
    t('autoFulfill.step4')
  ];

  return (
    <Modal show={show} onHide={onClose} size="xl" centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{t('orders.actions.autoFulfill')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Step Indicators */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center flex-fill">
              <div className="rounded-circle bg-primary text-white mx-auto mb-2" style={{ width: 32, height: 32 }}>
                {idx + 1}
              </div>
              {/* <div style={{ fontSize: '14px' }}>{step}</div> */}
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th><input type="checkbox" /></th>
                <th>{t('orders.table.order')}</th>
                <th>Products</th>
                <th>{t('orders.table.account')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
                    <div>{t('orders.table.noData')}</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-end">
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
        <button className="btn btn-primary" disabled>Next (0)</button>
      </Modal.Footer>
    </Modal>
  );
};

export default AutoFulfillModal;
