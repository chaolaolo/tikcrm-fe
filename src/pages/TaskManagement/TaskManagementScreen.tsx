import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TaskManagementScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-2">
      <div className="bg-white rounded shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Task management</h5>
          <div>
            <button className="btn btn-primary me-2">Create New</button>
            <button className="btn btn-outline-primary">
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
          </div>
        </div>
        {/* Divider */}
        <hr />
        {/* Task Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Schedule</th>
                <th>Last Run</th>
                <th>Next Run</th>
                <th>Task</th>
                <th>Creation Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="py-5 text-muted">
                  <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
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

export default TaskManagementScreen;
