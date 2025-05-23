import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // giả sử đăng ký xong là chuyển về login
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
