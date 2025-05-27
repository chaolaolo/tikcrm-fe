import React from 'react'

const PublishProductTab = () => {
    return (
        <div>
            {/* Market, Niche, Schedule Date */}
            <div className="row g-3 mb-3">
                <div className="col-md-3">
                    <label className="form-label">* Thị trường bán hàng</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="market" defaultChecked />
                        <label className="form-check-label">US</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="market" />
                        <label className="form-check-label">NON-US (UK, JP, DE, ES, FR, IE, IT...)</label>
                    </div>
                    <small className="text-muted">Vui lòng chọn thị trường bán hàng trước khi đăng sản phẩm</small>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Filter Shop By Niche</label>
                    <select className="form-select">
                        <option>Filter shop by niche</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Schedule product posting</label>
                    <input type="date" className="form-control" />
                    <small className="text-danger">Timezone: America/Los_Angeles<br />(Skip if you want to publish the product immediately!!!)</small>
                </div>
            </div>

            {/* Shop select */}
            <div className="mb-3">
                <label className="form-label">Shop</label>
                <select className="form-select">
                    <option>Please select shop</option>
                </select>
            </div>

            {/* Upload image */}
            <div className="mb-3 border rounded text-center p-5 border-primary" style={{ borderStyle: 'dashed' }}>
                <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
                <p className="mt-2">Click or drag file to this area to upload</p>
                <small className="text-muted">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</small>
            </div>

            {/* Product info */}
            <div className="row g-3 mb-3">
                <div className="col-md-12">
                    <label className="form-label">* Title</label>
                    <textarea className="form-control" placeholder="Nhập tên sản phẩm..." rows={2}></textarea>
                    <small className="text-muted">Recommended length: 40 characters or more. The category will be automatically identified by the product name.</small>
                </div>
            </div>

            <div className="row g-3 mb-3">
                <div className="col-md-4">
                    <label className="form-label">* Chọn nhóm mẫu sẵn có</label>
                    <select className="form-select"></select>
                </div>
                <div className="col-md-4">
                    <label className="form-label">* Select Category Template</label>
                    <select className="form-select" disabled>Select Category Template</select>
                </div>
                <div className="col-md-4">
                    <label className="form-label">* Brand</label>
                    <select className="form-select">
                        <option>Select brand</option>
                    </select>
                </div>
            </div>

            <div className="row g-3 mb-3">
                <div className="col-md-4">
                    <label className="form-label">* Category</label>
                    <select className="form-select">
                        <option>Chọn hạng mục sản phẩm</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <div className="card text-center p-4">
                        <div>+ Upload Size chart</div>
                        <small className="text-muted">To ensure customer satisfaction, upload a size chart to help customers find the right size.</small>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center p-4">
                        <div><i className="bi bi-play-btn"></i> Upload Video</div>
                        <small className="text-muted">Max size: 10MB. Format: MP4, MOV, MKV, AVI</small>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="row g-3 mb-3">
                <div className="col-md-6">
                    <label className="form-label">* Select an available description template</label>
                    <select className="form-select">
                        <option>MANUALLY ENTER DESCRIPTION</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">* Chọn mẫu description 2 có sẵn</label>
                    <select className="form-select">
                        <option>NHẬP TAY MẪU</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea className="form-control" rows={6}></textarea>
            </div>

            {/* Dimensions */}
            <div className="row g-3 mb-3">
                <div className="col-md-2">
                    <label className="form-label">* Package Weight</label>
                    <input className="form-control" placeholder="Chọn đơn vị" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">* Height</label>
                    <input className="form-control" placeholder="Enter product Height" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">* Width</label>
                    <input className="form-control" placeholder="Enter product Width" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">* Length</label>
                    <input className="form-control" placeholder="Enter product Length" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">* Unit</label>
                    <input className="form-control" placeholder="Nhập Unit" />
                </div>
            </div>

            {/* Size/Color */}
            <div className="mb-3">
                <label className="form-label">* Select an available Size, Price template</label>
                <select className="form-select mb-3" disabled>
                    <option>Select an available Size, Price template</option>
                </select>

                <div className="mb-2">
                    <label className="form-label">Color</label>
                    <div className="d-flex flex-wrap gap-2">
                        {['Black', 'White', 'Navy', 'Sand', 'Red', 'SportGrey'].map((color) => (
                            <span key={color} className="badge bg-secondary px-3 py-2">{color}</span>
                        ))}
                        <button className="btn btn-danger btn-sm">Xóa</button>
                    </div>
                </div>

                <div className="mb-2">
                    <label className="form-label">Size</label>
                    <div className="d-flex flex-wrap gap-2">
                        {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                            <span key={size} className="badge bg-secondary px-3 py-2">{size}</span>
                        ))}
                        <button className="btn btn-danger btn-sm">Xóa</button>
                    </div>
                </div>

                <button className="btn btn-outline-primary me-2">Thêm biến thể</button>
                <button className="btn btn-outline-secondary">Tạo SKU</button>
            </div>

            {/* Table bottom */}
            <div className="table-responsive mb-4">
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>Retail price</th>
                            <th>List price</th>
                            <th>Số lượng</th>
                            <th>Seller SKU</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={5} className="text-center py-4 text-muted">
                                <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
                                <div>No data</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer Actions */}
            <div className="text-center">
                <button className="btn btn-primary me-3">PUBLISH PRODUCT</button>
                <button className="btn btn-outline-secondary">Save as draft</button>
            </div>
        </div>
    )
}

export default PublishProductTab