import React, { useState, type FC } from 'react'
import ProductDescriptionForm from './TextEditor'
import { useTranslation } from 'react-i18next';

interface Props {
    isCollapsed: boolean;
}

const PublishProductTab: FC<Props> = (isCollapsed) => {
    const { t } = useTranslation();
    const [images, setImages] = useState<File[]>([]);

    return (
        <div>
            {/* Market, Niche, Schedule Date */}
            <div className="row g-3 mb-3">
                <div className="col-md-4 text-start">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="mb-0">{t('autoListing.market.label')}</label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="market" defaultChecked />
                        <label className="form-check-label">{t('autoListing.market.options.us')}</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="market" />
                        <label className="form-check-label">{t('autoListing.market.options.nonUs')}</label>
                    </div>
                    <small className="text-muted">{t('autoListing.market.note')}</small>
                </div>
                <div className="col-md-4 text-start">
                    <label className="form-label">{t('autoListing.filter.niche')}</label>
                    <select className="form-select">
                        <option>{t('autoListing.filter.niche')}</option>
                    </select>
                </div>
                <div className="col-md-4 text-start">
                    <label className="form-label">{t('autoListing.schedule.label')}</label>
                    <input type="date" className="form-control" />
                    <small className="text-secondary">{t('autoListing.schedule.timezone')}<br /></small>
                    <small className="text-danger">{t('autoListing.schedule.note')}</small>
                </div>
            </div>

            {/* Shop select */}
            <div className="mb-3 text-start">
                <div className="d-flex align-items-center">
                    <span className="text-danger me-1">*</span>
                    <label className="mb-0">{t('autoListing.shop.label')}</label>
                </div>
                <select className="form-select">
                    <option>{t('autoListing.shop.placeholder')}</option>
                </select>
            </div>

            {/* Upload image */}
            <div className="mb-3 border rounded text-center p-5 border-primary position-relative" style={{ borderStyle: 'dashed' }}>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                            setImages([...images, ...Array.from(files)]);
                        }
                    }}
                    className="position-absolute w-100 h-100"
                    style={{ opacity: 0, cursor: 'pointer', left: 0, top: 0 }}
                />
                <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
                <p className="mt-2">{t('autoListing.images.tooltip')}</p>
                <small className="text-muted">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</small>
            </div>
            {/* hiện ảnh đã chọn */}
            <div className="d-flex flex-wrap gap-3 my-3">
                {images.map((file, index) => (
                    <div key={index} className="position-relative">
                        <img
                            src={URL.createObjectURL(file)}
                            alt={`uploaded-${index}`}
                            className='border'
                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>
                ))}
            </div>


            {/* Product info */}
            <div className="row g-3 mb-3">
                <div className="col-md-12 text-start">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-0">{t('autoListing.titleField.label')}</label>
                        <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                    </div>
                    <textarea className="form-control" placeholder={t('autoListing.titleField.placeholder')} rows={2}></textarea>
                    <small className="text-muted">{t('autoListing.titleField.note')}</small>
                </div>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-primary me-1 fw-bold">*</span>
                        <label className="form-label text-primary mb-0 fw-bold">{t('autoListing.templateGroup')}</label>
                    </div>
                    <select className="form-select">
                        <option value="">{t('autoListing.templateGroup')}</option>
                    </select>
                </div>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-primary me-1 fw-bold">*</span>
                        <label className="form-label text-primary mb-0 fw-bold">{t('autoListing.categoryTemplate')}</label>
                    </div>
                    <select className="form-select bg-secondary-subtle">
                        <option>{t('autoListing.categoryTemplate')}</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-danger me-1 fw-bold">*</span>
                        <label className="form-label text-black mb-0">{t('autoListing.brand')}</label>
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
                        <label className="form-label mb-0">{t('autoListing.category')}</label>
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
                        <label className="form-label mb-0 fw-bold">{t('autoListing.sizeChart')}</label>
                        <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                    </div>
                    <div className="card text-center p-4" style={{ height: '130px' }}>
                        <div>+ Upload Size chart</div>
                        <small className="text-muted">To ensure customer satisfaction, upload a size chart to help customers find the right size.</small>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-end mb-1">
                        <label className="form-label mb-0 fw-bold">{t('autoListing.video')}</label>
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
                        <label className="form-label text-primary mb-0 fw-bold">{t('autoListing.description.template1')}</label>
                    </div>
                    <select className="form-select bg-secondary-subtle">
                        <option>MANUALLY ENTER DESCRIPTION</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-end mb-1">
                        <span className="text-primary me-1 fw-bold">*</span>
                        <label className="form-label text-primary mb-0 fw-bold">{t('autoListing.description.template2')}</label>
                    </div>
                    <select className="form-select bg-secondary-subtle">
                        <option>NHẬP TAY MẪU</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">
                <div className="d-flex align-items-end mb-1">
                    <label className="form-label mb-0">{t('autoListing.description.label')}</label>
                    <i className="bi bi-question-circle ms-1 text-muted" style={{ fontSize: '14px' }}></i>
                </div>
                <ProductDescriptionForm />
            </div>
            {/* Dimensions */}
            <div className="row g-2 mb-3">
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">{t('autoListing.dimension.weight')}</label>
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
                        <label className="form-label mb-1">{t('autoListing.dimension.height')}</label>
                    </div>
                    <input
                        type="number"
                        className="form-control" placeholder="Enter product Height" />
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">{t('autoListing.dimension.width')}</label>
                    </div>
                    <input
                        type="number"
                        className="form-control" placeholder="Enter product Width" />
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">{t('autoListing.dimension.length')}</label>
                    </div>
                    <input
                        type="number"
                        className="form-control" placeholder="Enter product Length" />
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <span className="text-danger me-1">*</span>
                        <label className="form-label mb-1">{t('autoListing.dimension.unit')}</label>
                    </div>
                    <input className="form-control" placeholder={t('autoListing.dimension.unitPlaceholder')} />
                </div>
            </div>

            {/* Size/Color */}
            <div className="mt-5 d-flex align-items-end mb-1">
                <span className="text-primary me-1 fw-bold">*</span>
                <label className="form-label text-primary mb-0 fw-bold">{t('autoListing.priceTemplate')}</label>
            </div>
            <div className="mb-3 text-start">
                <div className='col-md-6'>
                    <select className="form-select mb-3 bg-secondary-subtle">
                        <option hidden className='text-primary'>{t('autoListing.priceTemplate')}</option>
                        <option>MANUALLY ENTER SIZE, PRICE</option>
                    </select>
                </div>
                <div className='row g-2 justify-content-between align-items-center'>
                    <div className='col-auto d-flex gap-2'>
                        <button className="btn btn-outline-primary me-2 w-100vh">{t('autoListing.actions.addVariant')}</button>
                        <button className="btn btn-outline-primary w-100vh">{t('autoListing.actions.createSku')}</button>
                    </div>
                    <div className='col-auto'>
                        <button className="btn btn-outline-info w-100vh">{t('autoListing.actions.bulkUpdate')}</button>
                    </div>
                </div>
            </div>

            {/* Table bottom */}
            <div className="table-responsive mb-4">
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th className='fw-medium'>{t('autoListing.table.retailPrice')}</th>
                            <th className='fw-medium'>{t('autoListing.table.listPrice')}</th>
                            <th className='fw-medium'>{t('autoListing.table.quantity')}</th>
                            <th className='fw-medium'>{t('autoListing.table.sku')}</th>
                            <th className='fw-medium'>{t('autoListing.table.action')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={5} className="text-center py-4 text-muted">
                                <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
                                <div>{t('autoListing.table.noData')}</div>
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
                <button className="btn btn-primary">{t('autoListing.actions.publish')}</button>
                <button className="btn btn-outline-secondary">
                    <i className='bi bi-save me-1'></i>
                    {t('autoListing.actions.saveDraft')}</button>
            </div>
        </div>
    )
}

export default PublishProductTab