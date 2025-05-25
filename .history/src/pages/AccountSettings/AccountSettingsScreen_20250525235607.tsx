import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const AccountSettingsScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        <h5 className="mb-4">Quản lý tài khoản</h5>

        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">Cài đặt tài khoản</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cài đặt thông báo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đổi mật khẩu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tiếp thị</a>
          </li>
        </ul>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value="tranchaufw04@gmail.com" disabled />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><span className="text-danger">*</span> First Name</Form.Label>
            <Form.Control type="text" defaultValue="chau" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" defaultValue="tran" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><span className="text-danger">*</span> SKU Prefix</Form.Label>
            <Form.Control type="text" value="TRANCHAUFW04_ZMTW" disabled />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>API Key</Form.Label>
            <div className="input-group">
              <Form.Control type="text" />
              <span className="input-group-text">
                <i className="bi bi-clipboard"></i>
              </span>
            </div>
            <div className="text-primary small mt-1">Tạo mới api key</div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>KikiLogin API Key</Form.Label>
            <Form.Control type="text" placeholder="Nhập API Key KikiLogin" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Ngôn ngữ</Form.Label>
            <Form.Select defaultValue="English">
              <option>English</option>
              <option>Vietnamese</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary">Cập nhật thông tin</Button>
        </Form>
      </div>
    </div>
  );
};

export default AccountSettingsScreen;