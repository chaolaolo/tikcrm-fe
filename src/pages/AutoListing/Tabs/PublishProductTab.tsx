import React, { type FC } from 'react'
import ProductDescriptionForm from './TextEditor'

interface Props {
    isCollapsed: boolean;
}

const PublishProductTab: FC<Props> = (isCollapsed) => {
    return (
        <div>
            {/* Market, Niche, Schedule Date */}
            <div className="row g-3 mb-3">
                <div className="col-md-4 text-start">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="mb-0">Thị trường bán hàng</label>
                    </div>

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
                <div className="col-md-4 text-start">
                    <label className="form-label">Filter Shop By Niche</label>
                    <select className="form-select">
                        <option>Filter shop by niche</option>
                    </select>
                </div>
                <div className="col-md-4 text-start">
                    <label className="form-label">Schedule product posting</label>
                    <input type="date" className="form-control" />
                    <small className="text-secondary">Timezone: America/Los_Angeles<br /></small>
                    <small className="text-danger">Skip if you want to publish the product immediately!!!</small>
                </div>
            </div>

            {/* Shop select */}
            <div className="mb-3 text-start">
                <div className="d-flex align-items-center">
                    <span className="text-danger me-1">*</span>
                    <label className="mb-0">Shop</label>
                </div>
                <select className="form-select">
                    <option>Please select shop</option>
                </select>
            </div>

            {/* Upload image */}
            <div className="d-flex align-items-end mb-1">
                <span className="text-danger me-1">*</span>
                <label className="form-label mb-0">Product Images</label>
                <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
            </div>
            <div className="mb-3 border rounded text-center p-5 border-primary" style={{ borderStyle: 'dashed' }}>
                <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
                <p className="mt-2">Click or drag file to this area to upload</p>
                <small className="text-muted">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</small>
            </div>

            {/* Product info */}
            <div className="row g-3 mb-3">
                <div className="col-md-12 text-start">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-0">Title</label>
                        <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                    </div>
                    <textarea className="form-control" placeholder="Nhập tên sản phẩm..." rows={2}></textarea>
                    <small className="text-muted">Recommended length: 40 characters or more. The category will be automatically identified by the product name.</small>
                </div>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-primary me-1 fw-bold">*</span>
                        <label className="form-label text-primary mb-0 fw-bold">Chọn nhóm mẫu sẵn có</label>
                    </div>
                    <select className="form-select">
                        <option value="">Chọn nhóm mẫu sẵn có</option>
                    </select>
                </div>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-primary me-1 fw-bold">*</span>
                        <label className="form-label text-primary mb-0 fw-bold">Select Category Template</label>
                    </div>
                    <select className="form-select bg-secondary-subtle">
                        <option>Select Category Template</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-danger me-1 fw-bold">*</span>
                        <label className="form-label text-black mb-0">Brand</label>
                    </div>
                    <select className="form-select">
                        <option>Select brand</option>
                    </select>
                </div>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-0">Category</label>
                        <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                    </div>
                    <select className="form-select">
                        <option>Chọn hạng mục sản phẩm</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 mb-3">
                <div className="col-md-4">
                    <div className="d-flex align-items-end mb-1">
                        <label className="form-label mb-0 fw-bold">Size Chart</label>
                        <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                    </div>
                    <div className="card text-center p-4" style={{ height: '130px' }}>
                        <div>+ Upload Size chart</div>
                        <small className="text-muted">To ensure customer satisfaction, upload a size chart to help customers find the right size.</small>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-end mb-1">
                        <label className="form-label mb-0 fw-bold">Video</label>
                        <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                    </div>
                    <div className="card text-center p-4" style={{ height: '130px' }}>
                        <div><i className="bi bi-play-btn"></i> Upload Video</div>
                        <small className="text-muted">Max size: 10MB. Format: MP4, MOV, MKV, AVI</small>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="row g-3 mb-3">
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-primary me-1 fw-bold">*</span>
                        <label className="form-label text-primary mb-0 fw-bold">Select an available description template</label>
                    </div>
                    <select className="form-select bg-secondary-subtle">
                        <option>MANUALLY ENTER DESCRIPTION</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-primary me-1 fw-bold">*</span>
                        <label className="form-label text-primary mb-0 fw-bold">Chọn mẫu description 2 có sẵn</label>
                    </div>
                    <select className="form-select bg-secondary-subtle">
                        <option>NHẬP TAY MẪU</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">
                <div className="d-flex align-items-end mb-1">
                    <label className="form-label mb-0">Mô tả</label>
                    <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                </div>
                <ProductDescriptionForm />
            </div>
            {/* Dimensions */}
            <div className="row g-2 mb-3">
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">Package Weight</label>
                    </div>
                    <div className="form-control d-flex p-0" >
                        <input
                            type="number"
                            className="form-control rounded-0 rounded-start"
                            placeholder='Enter product weight' />
                        <select className="form-select bg-secondary-subtle rounded-0 rounded-end">
                            <option hidden>
                                Chọn đơn vị
                            </option>
                            <option>GRAM(g)</option>
                            <option>KILOGRAM(kg)</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">Height</label>
                    </div>
                    <input
                        type="number"
                        className="form-control" placeholder="Enter product Height" />
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">Width</label>
                    </div>
                    <input
                        type="number"
                        className="form-control" placeholder="Enter product Width" />
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">Length</label>
                    </div>
                    <input
                        type="number"
                        className="form-control" placeholder="Enter product Length" />
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">Unit</label>
                    </div>
                    <input className="form-control" placeholder="Nhập Unit" />
                </div>
            </div>

            {/* Size/Color */}
            <div className="mt-5 d-flex align-items-end mb-1">
                <span className="text-primary me-1 fw-bold">*</span>
                <label className="form-label text-primary mb-0 fw-bold">Select an available Size, Price template</label>
            </div>
            <div className="mb-3 text-start">
                <div className='col-md-6'>
                    <select className="form-select mb-3 bg-secondary-subtle">
                        <option hidden className='text-primary'>Select an available Size, Price template</option>
                        <option>MANUALLY ENTER SIZE, PRICE</option>
                    </select>
                </div>
                <div className='row g-2 justify-content-between align-items-center'>
                    <div className='col-auto d-flex gap-2'>
                        <button className="btn btn-outline-primary me-2 w-100vh">Thêm biến thể</button>
                        <button className="btn btn-outline-primary w-100vh">Tạo SKU</button>
                    </div>
                    <div className='col-auto'>
                        <button className="btn btn-outline-info w-100vh">Cập nhật hàng loạt</button>
                    </div>
                </div>
            </div>

            {/* Table bottom */}
            <div className="table-responsive mb-4">
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th className='fw-medium'>Retail price</th>
                            <th className='fw-medium'>List price</th>
                            <th className='fw-medium'>Số lượng</th>
                            <th className='fw-medium'>Seller SKU</th>
                            <th className='fw-medium'>Action</th>
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
            <div
                className="position-absolute d-flex gap-3 bg-secondary-subtle py-3 px-3 justify-content-center"
                style={{
                    bottom: '0',
                    left: isCollapsed ? '100px' : '250px',
                    right: '0',
                    zIndex: 10,
                }}
            >
                <button className="btn btn-primary">PUBLISH PRODUCT</button>
                <button className="btn btn-outline-secondary">
                    <i className='bi bi-save me-1'></i>
                    Save as draft</button>
            </div>
        </div>
    )
}

export default PublishProductTab