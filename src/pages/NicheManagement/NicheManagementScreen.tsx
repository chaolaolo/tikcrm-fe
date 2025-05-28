import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NicheManagementScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Niche-Sub Niche Management</h5>
        </div>

        {/* Divider */}
        <hr />
        {/*  */}
        <div className="d-flex justify-content-end align-items-center mb-4">
          <div>
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
            <button className="btn btn-primary">
              Add Niche
            </button>
          </div>
        </div>

        {/* Niche Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th className="fw-medium text-center align-middle">Niche Name</th>
                <th className="fw-medium text-center align-middle">Parent Niche</th>
                <th className="fw-medium text-center align-middle">Creation Date</th>
                <th className="fw-medium text-center align-middle" style={{
                  width: '120px',
                  position: 'sticky',
                  right: 0,
                  zIndex: 0,
                  boxShadow: '-6px 0 6px -2px rgba(0,0,0,0.15)',
                }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                    <div>No data</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NicheManagementScreen;

