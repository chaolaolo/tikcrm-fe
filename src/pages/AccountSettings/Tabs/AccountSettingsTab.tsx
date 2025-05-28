import React, { useState } from 'react'
import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copied ? 'Copied' : 'Copy'}
    </Tooltip>
  );

  return (
    <div className="mt-2 text-start col-md-6 justify-content-left">
      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value="tranchaufw04@gmail.com" disabled />
      </div>

      {/* First Name */}
      <div className="mb-3">
        <label className="form-label">
          <span className="text-danger">*</span> First Name
        </label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          placeholder='Enter your first name'
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Last Name */}
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          placeholder='Enter your last name'
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* SKU Prefix */}
      <div className="mb-3">
        <label className="form-label">
          <span className="text-danger">*</span> SKU Prefix
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
        <label className="form-label">API Key</label>
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
        >Tạo mới api key</small>
      </div>

      {/* KikiLogin API Key */}
      <div className="mb-3">
        <label className="form-label">KikiLogin API Key</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nhập API Key KikiLogin"
          value={kikiApiKey}
          onChange={(e) => setKikiApiKey(e.target.value)}
        />
      </div>

      {/* Ngôn ngữ */}
      <div className="mb-4">
        <label className="form-label">Ngôn ngữ</label>
        <select
          className="form-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
        </select>
      </div>

      {/* Button */}
      <button className="btn btn-primary">Cập nhật thông tin</button>
    </div>
  );
}

export default AccountSettingsTab


// import React from 'react'
// import { Form, Button } from 'react-bootstrap';

// const AccountSettingsTab = () => {
//   return (
//     <div>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" value="tranchaufw04@gmail.com" disabled />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label><span className="text-danger">*</span> First Name</Form.Label>
//             <Form.Control type="text" defaultValue="chau" />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control type="text" defaultValue="tran" />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label><span className="text-danger">*</span> SKU Prefix</Form.Label>
//             <Form.Control type="text" value="TRANCHAUFW04_ZMTW" disabled />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>API Key</Form.Label>
//             <div className="input-group">
//               <Form.Control type="text" />
//               <span className="input-group-text">
//                 <i className="bi bi-clipboard"></i>
//               </span>
//             </div>
//             <div className="text-primary small mt-1">Tạo mới api key</div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>KikiLogin API Key</Form.Label>
//             <Form.Control type="text" placeholder="Nhập API Key KikiLogin" />
//           </Form.Group>

//           <Form.Group className="mb-4">
//             <Form.Label>Ngôn ngữ</Form.Label>
//             <Form.Select defaultValue="English">
//               <option>English</option>
//               <option>Vietnamese</option>
//             </Form.Select>
//           </Form.Group>

//           <Button variant="primary">Cập nhật thông tin</Button>
//         </Form>
//     </div>
//   )
// }

// export default AccountSettingsTab