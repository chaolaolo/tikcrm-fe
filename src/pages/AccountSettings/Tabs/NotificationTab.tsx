import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

const NotificationTab = () => {
  const [enabled, setEnabled] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="container mt-3">
      <div className="d-flex align-items-left justify-content-between bg-white py-4 rounded text-start">
        <div className="d-flex align-items-center">
          {/* Telegram Icon */}
          <div
            className="d-flex align-items-center justify-content-center rounded-circle me-3"
            style={{ backgroundColor: '#29a7df', width: '40px', height: '40px' }}
          >
            <i className="bi bi-telegram text-white" style={{ fontSize: '20px' }}></i>
          </div>

          {/* Text */}
          <div>
            <div className="fw-bold text-uppercase">Telegram</div>
            <div className="text-muted">Receive notification by Telegram</div>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="telegramSwitch"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
        </div>
      </div>
    </div>
  )
}

export default NotificationTab