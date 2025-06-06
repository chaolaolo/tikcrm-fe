import './App.css'
import { useAuth } from './store/AuthContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/Login/LoginPage';
import RegisterPage from './pages/Auth/Register/RegisterPage';
import HomePage from './pages/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'antd/dist/reset.css'
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import Dashboard from './pages/OrderManagement/OrderManagementScreen';
import Layout from './pages/Layouts/Layout';
import OrderManagementScreen from './pages/OrderManagement/OrderManagementScreen';
import ProductManagementScreen from './pages/ProductManagement/ProductManagementScreen';
import './i18n'; 

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<OrderManagementScreen />} />
        <Route path="order-management" element={<OrderManagementScreen />} />
        <Route path="product-management" element={<ProductManagementScreen />} />
        {/* thêm màn khác */}
      </Route>


      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
      /> */}
      <Route
        path="/home/*"
        element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default App;