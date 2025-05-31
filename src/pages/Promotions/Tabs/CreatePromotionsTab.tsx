import { type FC } from 'react'

const CreatePromotionsTab: FC = () => {
    return (
        <div>
            {/* Form Inputs */}
            <div className="row g-3 mb-4 text-start">
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="mb-1">Promotion name</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Nhập Tên Promotion" />
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="mb-1">Loại Promotion</label>
                    </div>
                    <select className="form-select">
                        <option>FLASH SALE</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 mb-4 text-start">
                <div className="col-md-2">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="mb-1">Thời gian bắt đầu</label>
                    </div>
                    <input type="date" className="form-control" />
                    <small className="text-muted">Timezone: America/Los_Angeles<br />Không thời gian tối đa cho Promotion là 3 ngày</small>
                </div>
                <div className="col-md-2">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="mb-1">Thời gian kết thúc</label>
                    </div>
                    <input type="date" className="form-control" />
                    <small className="text-muted">Timezone: America/Los_Angeles</small>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="mb-1">Products</label>
                    </div>
                    <select className="form-select">
                        <option hidden>Chọn loại products</option>
                        <option>PRODUCT-LEVEL</option>
                        <option>VARIATION-LEVEL (Hỗ trợ FLASH SALE)</option>
                    </select>
                </div>
            </div>

            {/* Product Table */}
            <div className="table-responsive" style={{ overflowX: 'auto' }}>
                <table className="table table-bordered align-middle text-center mb-4">
                    <thead className="table-light">
                        <tr>
                            <th className="fw-medium"
                                style={{
                                    minWidth: 50,
                                    position: 'sticky',
                                    left: 0,
                                    zIndex: 2,
                                    boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.05)',
                                }}><input type="checkbox" /></th>
                            <th className="fw-medium text-center align-middle" style={{ minWidth: 200 }}>Thông tin sản phẩm</th>
                            <th className="fw-medium text-center align-middle" style={{ minWidth: 150 }}>Giá bán lẻ</th>
                            <th className="fw-medium text-center align-middle" style={{ minWidth: 200 }}>Deal Price</th>
                            <th className="fw-medium text-center align-middle" style={{ minWidth: 200 }}>Total Purchase Limit</th>
                            <th className="fw-medium text-center align-middle" style={{ minWidth: 200 }}>Customer Purchase Limit</th>
                            <th className="fw-medium text-center align-middle" style={{ minWidth: 100 }}>Status</th>
                            <th className="sticky-action-column fw-medium text-center align-middle"
                                style={{
                                    minWidth: 120,
                                    position: 'sticky',
                                    right: 0,
                                    zIndex: 2,
                                    boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.05)',
                                }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={8} className="py-5 text-muted">
                                <div className="d-flex flex-column align-items-center">
                                    <i className="bi bi-inbox" style={{ fontSize: '3rem' }}></i>
                                    <div>No data</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer Actions */}
            <div
                className="position-absolute d-flex  bg-secondary-subtle py-3 px-3 justify-content-center"
                style={{
                    bottom: '0',
                    // left: isCollapsed ? '100px' : '250px',
                    left: 0,
                    right: '0',
                    zIndex: 10,
                }}
            >
                <button className="btn btn-primary px-4">Tạo Promotion</button>
            </div>
        </div>)
}

export default CreatePromotionsTab