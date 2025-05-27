import React from 'react'

const CreatePromotionsTab = () => {
    return (
        <div>
            {/* Form Inputs */}
            <div className="row g-3 mb-4">
                <div className="col-md-6">
                    <label className="form-label">* Promotion name</label>
                    <input type="text" className="form-control" placeholder="Nhập Tên Promotion" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">* Loại Promotion</label>
                    <select className="form-select">
                        <option>FLASH SALE</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">* Thời gian bắt đầu</label>
                    <input type="date" className="form-control" />
                    <small className="text-muted">Timezone: America/Los_Angeles<br />Không thời gian tối đa cho Promotion là 3 ngày</small>
                </div>
                <div className="col-md-6">
                    <label className="form-label">* Thời gian kết thúc</label>
                    <input type="date" className="form-control" />
                    <small className="text-muted">Timezone: America/Los_Angeles</small>
                </div>
                <div className="col-md-6">
                    <label className="form-label">* Products</label>
                    <select className="form-select">
                        <option>VARIATION-LEVEL (Hỗ trợ FLASH SALE)</option>
                    </select>
                </div>
            </div>

            {/* Product Table */}
            <div className="table-responsive mb-4">
                <table className="table table-bordered text-center">
                    <thead className="table-light">
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Thông tin sản phẩm</th>
                            <th>Giá bán lẻ</th>
                            <th>Deal Price</th>
                            <th>Total Purchase Limit</th>
                            <th>Customer Purchase Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={6} className="py-5 text-muted">
                                <div className="d-flex flex-column align-items-center">
                                    <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
                                    <div>No data</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Bottom Action */}
            <div className="text-center">
                <button className="btn btn-primary px-4">Tạo Promotion</button>
            </div>
        </div>)
}

export default CreatePromotionsTab