import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './modal.css';
interface AutoFulfillModalProps {
  show: boolean;
  onClose: () => void;
}

const AutoFulfillModal: React.FC<AutoFulfillModalProps> = ({ show, onClose }) => {
  const { t } = useTranslation();
  const [animationClass, setAnimationClass] = useState('');

  const steps = [
    t('autoFulfill.step1'),
    t('autoFulfill.step2'),
    t('autoFulfill.step3'),
    t('autoFulfill.step4')
  ];

  useEffect(() => {
    if (show) {
      setAnimationClass('slide-in');
    } else if (!show) {
      setAnimationClass('slide-out');
    }
  }, [show]);

  return (
    <Modal show={show}
      onHide={onClose}
      dialogClassName={`custom-modal-slide ${animationClass}`}
      contentClassName="h-100"
      onExited={() => setAnimationClass('')}>
      <Modal.Header closeButton>
        <Modal.Title>{t('orders.actions.autoFulfill')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="h-100 overflow-auto">
        {/* Step Indicators */}
        <div className="d-flex align-items-center justify-content-between mb-4 px-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="text-center d-flex flex-column align-items-center">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
                  {idx + 1}
                </div>
                {/* <div className="text-muted small mt-1">{step}</div> */}
              </div>
              {idx < steps.length - 1 && (
                <div className="flex-grow-1 mx-2 my-auto step-line" />
              )}
            </React.Fragment>
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
