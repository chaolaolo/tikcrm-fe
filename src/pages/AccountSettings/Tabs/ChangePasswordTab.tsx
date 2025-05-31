import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const ChangePasswordTab = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { t } = useTranslation();

  return (
    <div className="container mt-2 text-start justify-content-left">
      {/* Mật khẩu cũ */}
      <div className="mb-3 col-md-6">
        <label className="form-label">
          <span className="text-danger">*</span> {t('accountSettings.password.old')}
        </label>
        <Input.Password
          placeholder={t('accountSettings.password.placeholderOld')}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      {/* Mật khẩu mới */}
      <div className="mb-3 col-md-6">
        <label className="form-label">
          <span className="text-danger">*</span> {t('accountSettings.password.new')}
        </label>
        <Input.Password
          placeholder={t('accountSettings.password.placeholderNew')}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      {/* Nhập lại mật khẩu mới */}
      <div className="mb-4 col-md-6">
        <label className="form-label">
          <span className="text-danger">*</span> {t('accountSettings.password.confirm')}
        </label>
        <Input.Password
          placeholder={t('accountSettings.password.placeholderConfirm')}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          className="border-primary"
        />
      </div>

      {/* Button */}
      <Button type="primary" className="px-4">
        {t('accountSettings.password.submit')}
      </Button>
    </div>
  )
}

export default ChangePasswordTab