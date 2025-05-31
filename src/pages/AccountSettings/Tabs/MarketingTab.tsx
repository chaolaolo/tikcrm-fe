import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const MarketingTab = () => {
  const { t } = useTranslation();


  return (
    <div className='d-flex justify-content-between'>
      <div className="table-responsive col-md-7 me-2" style={{ overflowX: 'auto' }}>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th className="fw-normal text-center align-middle">{t('accountSettings.referral.email')}</th>
              <th className="fw-normal text-center align-middle">{t('accountSettings.referral.name')}</th>
              <th className="fw-normal text-center align-middle">{t('accountSettings.referral.plan')}</th>
              <th className="fw-normal text-center align-middle">{t('accountSettings.referral.shopCount')}</th>
              <th className="fw-normal text-center align-middle">{t('accountSettings.referral.status')}</th>
              <th className="fw-normal text-center align-middle">{t('accountSettings.referral.registerDate')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} className="py-5 text-muted">
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
                  <div>{t('accountSettings.referral.noData')}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-5 px-2">
        <InviteCard />
      </div>
    </div>
  )
}

export default MarketingTab


const InviteCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = '45R7A96R';
  const {t} = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      {copied ? 'Copied' : 'Copy'}
    </Tooltip>
  );

  return (
    <div className="text-white p-4 rounded-4" style={{ width: '100%', backgroundColor: '#001529' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="fw-bold">
          <i className="bi bi-person-plus-fill me-2 text-warning"></i> {t('accountSettings.referral.title')}
        </div>
        <div className="text-warning small">{t('accountSettings.referral.earned')} 0</div>
      </div>

      <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
        <div className="d-flex align-items-center">
          <i className="bi bi-coin me-2 text-warning"></i> {t('accountSettings.referral.success')}
        </div>
        <div className="text-white">0 <i className="bi bi-person"></i></div>
      </div>

      <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
        <div className="d-flex align-items-center">
          <i className="bi bi-coin me-2 text-warning"></i> {t('accountSettings.referral.upgraded')}
        </div>
        <div className="text-white">0 <i className="bi bi-person"></i></div>
      </div>

      <div className="mt-3">
        <div className="input-group border rounded px-2 py-2 align-items-center">
          <span className="text-white-50 small me-auto">{t('accountSettings.referral.referralCode')}</span>
          <span className="text-warning fw-bold" onClick={handleCopy} style={{ cursor: 'pointer' }}>{referralCode}</span>
          <OverlayTrigger
            delay={{ show: 100, hide: 200 }}
            overlay={renderTooltip}
            placement="top">
            <button
              className="btn btn-sm btn-dark border-0"
              onClick={handleCopy}
              style={{ position: 'relative', backgroundColor: 'transparent' }}
            >
              {copied ? <i className="bi bi-check2 text-success"></i> : <i className="bi bi-clipboard text-warning"></i>}
            </button>
          </OverlayTrigger>
        </div>
      </div>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-outline-warning text-white flex-grow-1" style={{ fontSize: 14, border: '1px solid #fff' }}>
          <i className="bi bi-link-45deg me-1"></i> {t('accountSettings.referral.copyLink')}
        </button>
        <button className="btn btn-outline-warning text-white flex-grow-1" style={{ fontSize: 14, border: '1px solid #fff' }}>
          <i className="bi bi-qr-code me-1"></i> {t('accountSettings.referral.shareQr')}
        </button>
      </div>
    </div>
  );
};