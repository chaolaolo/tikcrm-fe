import { useState } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const generateRandomApiKey = () => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 32; i++) {
    key += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return key;
};

const AccountSettingsTab = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [kikiApiKey, setKikiApiKey] = useState('');
  const [language, setLanguage] = useState('en');
  const [copied, setCopied] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const { t, i18n } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handleGenerateNewKey = () => {
    const newKey = generateRandomApiKey();
    setApiKey(newKey);
    setCopied(false);
  };

  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      {copied ? 'Copied' : 'Copy'}
    </Tooltip>
  );

  return (
    <div className="mt-2 text-start col-md-6 justify-content-left">
      {/* Email */}
      <div className="mb-3">
        <label className="form-label">{t('accountSettings.form.email')}</label>
        <input type="email" className="form-control" value="tranchaufw04@gmail.com" disabled />
      </div>

      {/* First Name */}
      <div className="mb-3">
        <label className="form-label">
          <span className="text-danger">*</span> {t('accountSettings.form.firstName')}
        </label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          placeholder={t('accountSettings.form.firstNamePlaceholder')}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Last Name */}
      <div className="mb-3">
        <label className="form-label">{t('accountSettings.form.lastName')}</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          placeholder={t('accountSettings.form.lastNamePlaceholder')}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* SKU Prefix */}
      <div className="mb-3">
        <label className="form-label">
          <span className="text-danger">*</span> {t('accountSettings.form.skuPrefix')}
        </label>
        <input
          type="text"
          className="form-control"
          value="TRANCHAUFW04_ZMTW"
          disabled
        />
      </div>

      {/* API Key + Copy */}
      <div className="mb-1">
        <label className="form-label">{t('accountSettings.form.apiKey')}</label>
        <div className="input-group">
          <input type="text" className="form-control" value={apiKey} disabled />
          {/* <button className="btn btn-outline-secondary" type="button" onClick={handleCopy}>
            <i className="bi bi-clipboard"></i>
          </button> */}
          <OverlayTrigger
            delay={{ show: 100, hide: 200 }}
            overlay={renderTooltip}
            placement="top">
            <button
              className="btn text-primary"
              type="button"
              onClick={handleCopy}
              style={{ position: 'relative', backgroundColor: '#e9ecef' }}
            >
              {copied ? (
                <i className="bi bi-check-lg text-success"></i>
              ) : (
                <i className="bi bi-clipboard"></i>
              )}
            </button>
          </OverlayTrigger>
        </div>
      </div>
      <div className="mb-3 text-end">
        {/* <smail style={{ fontSize: '13px' }}>Tạo mới api key</smail> */}
        <small
          className="text-primary fw-bold"
          style={{ fontSize: '13px', cursor: 'pointer' }}
          onClick={handleGenerateNewKey}
        >{t('accountSettings.form.newApiKey')}</small>
      </div>

      {/* KikiLogin API Key */}
      <div className="mb-3">
        <label className="form-label">{t('accountSettings.form.kikiApiKey')}</label>
        <input
          type="text"
          className="form-control"
          placeholder={t('accountSettings.form.kikiApiKeyPlaceholder')}
          value={kikiApiKey}
          onChange={(e) => setKikiApiKey(e.target.value)}
        />
      </div>

      {/* Ngôn ngữ */}
      <div className="mb-4">
        <label className="form-label">{t('accountSettings.form.language')}</label>
        <select
          className="form-select"
          value={i18n.language || language} 
          onChange={(e) => {
            const selectedLanguage = e.target.value;
            setLanguage(selectedLanguage)
            i18n.changeLanguage(selectedLanguage);
          }}
        >
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
        </select>
      </div>

      {/* Button */}
      <button className="btn btn-primary">{t('accountSettings.form.update')}</button>
    </div>
  );
}

export default AccountSettingsTab
