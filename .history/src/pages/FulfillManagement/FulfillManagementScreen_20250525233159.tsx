// import React from 'react'

// const FulfillManagementScreen = () => {
//   return (
//     <div>FulfillManagementScreen</div>
//   )
// }

// export default FulfillManagementScreen

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const fulfillments = [
  {
    name: 'MERCHFOX',
    description: 'Say goodbye to app mazes and hello to the all-in-one E-commerce solution, allowing you to focus on what truly matters - maximizing your profits.',
    logo: '../../assets/Logo/merchfox.png'
  },
  {
    name: 'PRINTWAY',
    description: 'Your custom prints, your way, on-demand! 100% free to use. 300+ High-Quality Products. No order minimums. Complete automation',
    logo: ''
  },
  {
    name: 'SENPRINTS',
    description: 'SenPrints is a group of creative and experienced experts in designing and promoting print-on-demand products. Bringing your senses to life is our motto.',
    logo: ''
  },
  {
    name: 'PGPRINTS',
    description: 'Choose from 500+ products shipped worldwide. Simply add your designs. Explore best-seller categories here',
    logo: ''
  },
  {
    name: 'BURGERPRINTS',
    description: 'Your Leading POD Partner with a Diverse Catalog and Lightning-Fast Shipping – Beyond TikTok Shop Standards!',
    logo: ''
  },
  {
    name: 'PRESSIFY',
    description: 'Specializing in custom printing, particularly for t-shirts, and offering warehouse rental services, we provide comprehensive solutions tailored to your needs.',
    logo: ''
  },
  {
    name: 'FLASHPOD',
    description: 'FlashPOD là nền tảng Print-on-Demand (POD) hàng đầu, nơi bạn có thể thỏa sức sáng tạo và kinh doanh các sản phẩm độc đáo.',
    logo: ''
  },
  {
    name: 'MERCHIZE',
    description: 'Merchize is now building a global print on demand network designed to let merchants, businesses, brands and retailers transform digital imagery into physical products.',
    logo: ''
  },
  {
    name: 'LENFUL',
    description: 'Printing and manufacturing system that helps you sell POD products and deliver directly to customers around the world.',
    logo: ''
  },
];

const FulfillManagementScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="bg-white rounded shadow-sm p-4">
        <h5 className="mb-4">Quản lý fulfill</h5>
        <ul className="list-group list-group-flush text-start">
          {fulfillments.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="d-flex align-items-start gap-3">
                <img
                  src={item.logo || 'https://via.placeholder.com/40'}
                  alt={item.name}
                  width={40}
                  height={40}
                />
                <div>
                  <h6 className="fw-bold mb-1 text-uppercase">{item.name}</h6>
                  <p className="mb-0 text-muted small" style={{ maxWidth: '100%', fontFamily: 'Arial, sans-serif' }}>{item.description}</p>
                </div>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FulfillManagementScreen;
