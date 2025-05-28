import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangePasswordTab = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container mt-2 text-start justify-content-left">
      {/* Mật khẩu cũ */}
      <div className="mb-3 col-md-6">
        <label className="form-label">
          <span className="text-danger">*</span> Mật khẩu cũ
        </label>
        <Input.Password
          placeholder="Nhập Mật khẩu cũ"
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
          <span className="text-danger">*</span> Mật khẩu mới
        </label>
        <Input.Password
          placeholder="Nhập Mật khẩu mới"
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
          <span className="text-danger">*</span> Nhập lại mật khẩu mới
        </label>
        <Input.Password
          placeholder="Nhập lại mật khẩu mới"
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
        Đổi mật khẩu
      </Button>
    </div>
  )
}

export default ChangePasswordTab