import React, { useState } from 'react';
import Layout from '../Layouts/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout/>
    // <Layout>
    //   <div>
    //     <div className="d-flex justify-content-between align-items-center mb-4">
    //       <h2>Orders</h2>
    //       <div className="d-flex gap-2">
    //         <button className="btn btn-primary">
    //           <i className="bi bi-lightning-fill me-2"></i>
    //           Auto Fulfill
    //         </button>
    //         <button className="btn btn-info">
    //           <i className="bi bi-download me-2"></i>
    //           Export order
    //         </button>
    //         <button className="btn btn-success">
    //           <i className="bi bi-arrow-repeat me-2"></i>
    //           Sync order
    //         </button>
    //         <button className="btn btn-secondary">
    //           <i className="bi bi-arrow-clockwise me-2"></i>
    //           Refresh
    //         </button>
    //       </div>
    //     </div>

    //     {/* Order Status Tabs */}
    //     <div className="mb-4">
    //       <ul className="nav nav-pills">
    //         <li className="nav-item">
    //           <a className="nav-link active" href="#">Orders Without Design</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Orders With Design (Not Yet Fulfilled)</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Overdue Orders</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Suspicious Orders</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Returned Orders</a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Filters */}
    //     <div className="row mb-4">
    //       <div className="col-md-3">
    //         <input type="text" className="form-control" placeholder="Search order id" />
    //       </div>
    //       <div className="col-md-3">
    //         <input type="text" className="form-control" placeholder="Search product id" />
    //       </div>
    //       <div className="col-md-3">
    //         <input type="text" className="form-control" placeholder="Search product name" />
    //       </div>
    //       <div className="col-md-3">
    //         <select className="form-select">
    //           <option>All Stores</option>
    //         </select>
    //       </div>
    //     </div>

    //     <div className="row mb-4">
    //       <div className="col-md-3">
    //         <select className="form-select">
    //           <option>All Staff</option>
    //         </select>
    //       </div>
    //       <div className="col-md-3">
    //         <select className="form-select">
    //           <option>All Services</option>
    //         </select>
    //       </div>
    //       <div className="col-md-3">
    //         <select className="form-select">
    //           <option>All Statuses</option>
    //         </select>
    //       </div>
    //       <div className="col-md-3">
    //         <div className="d-flex gap-2">
    //           <input type="date" className="form-control" placeholder="Start date" />
    //           <input type="date" className="form-control" placeholder="End date" />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Orders Table */}
    //     <div className="card">
    //       <div className="card-body">
    //         <table className="table table-striped">
    //           <thead>
    //             <tr>
    //               <th>ID</th>
    //               <th>Account / Seller</th>
    //               <th>Order</th>
    //               <th>Order info</th>
    //               <th>Price</th>
    //               <th>Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td colSpan="6" className="text-center py-5 text-muted">
    //                 <div className="d-flex flex-column align-items-center">
    //                   <i className="bi bi-inbox" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
    //                   <span>No data</span>
    //                 </div>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
  );
};

export default Dashboard;